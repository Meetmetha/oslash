import { Injectable, Inject, HttpService, BadRequestException } from '@nestjs/common';
import { Listener } from './auth.listener';
import { container } from '@app/auth/container';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { randomToken } from '@libs/core/helpers';
import {
  InvalidCredentials,
  ValidationFailed,
  GenericException,
  Unauthorized,
} from '@libs/core/exceptions';
import { BaseValidator } from '@libs/core/validator';
import { TokenRepository } from '@app/auth/repositories/contracts';
import {
  ConsumerRegistration,
  ConsumerLogin,
} from './validators';
import { JwtService } from '@nestjs/jwt';
import { Hash } from './utils';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  constructor(
    private http: HttpService,
    private listener: Listener,
    private config: ConfigService,
    private validator: BaseValidator,
    private jwtService: JwtService,
    @Inject(container.TOKEN_REPOSITORY) private tokens: TokenRepository,
  ) {}

  /**
   * User registration
   * @param inputs
   */
  async consumerRegistration(
    inputs: Record<string, any>
  ): Promise<any> {
    await this.validator.fire(inputs, ConsumerRegistration);
    inputs.password = await Hash.make(inputs.password);
    inputs.email = inputs.email.toLowerCase();
    const user = await this.listener.createUser(inputs);
    user.token = this.getToken(user);
    return user;
  }

  /**
   * User Logout
   * @param header
   * @param user
   */
   async consumerLogout(
    header: Record<string, any>,
    user: Record<string, any>
  ): Promise<any> {
    const jwt = header.replace('Bearer','').trim();
    const alreadyLoggedOut = await this.tokens.getWhere({token:jwt});
    if(alreadyLoggedOut.length >= 1){
      throw new BadRequestException("You are already Logged Out of this Token Session");
    }
    return await this.tokens.create({user: user._id, token: jwt });
  }

  /**
   * Login as User
   * @param inputs
   */
  async consumerLogin(inputs: Record<string, any>): Promise<any> {
    await this.validator.fire(inputs, ConsumerLogin);
    const user = await this.listener.usersSearchFirst({
      email: inputs.email.toLowerCase(),
    });

    if (!(await Hash.match(inputs.password, user.password))) {
      throw new InvalidCredentials();
    }
    const token = this.getToken(user);
    return token;
  }
  /**
   * Get JWT Token for user
   * @param user
   */
  private getToken(user:any): string {
    return this.jwtService.sign({
      sub: user._id,
    });
  }

  /**
   * Get user by the passed id
   * @param _id
   */
  async getUserById(_id: string): Promise<any> {
    return await this.listener.usersSearchFirst({ _id });
  }

  /**
   * Check Session blacklist
   * @param _id
   */
   async checkSessionblacklist(tokenvalue: string): Promise<any> {
    return await this.tokens.getWhere({ token: tokenvalue }, false);
  }

}
