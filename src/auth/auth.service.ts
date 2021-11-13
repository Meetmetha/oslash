import { Injectable, Inject, HttpService } from '@nestjs/common';
import { Listener } from './auth.listener';
import { randomToken } from '@libs/core/helpers';
import {
  InvalidCredentials,
  ValidationFailed,
  GenericException,
  Unauthorized,
} from '@libs/core/exceptions';
import { BaseValidator } from '@libs/core/validator';
import {
  ConsumerRegistration,
  ConsumerLogin,
  ChangePassword
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
  ) {}

  /**
   * Consumer registration
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

  async changePassword(
    user: Record<string, any>,
    inputs: Record<string, any>,
  ): Promise<any> {
    await this.validator.fire(inputs, ChangePassword);

    // verify old password
    if (!(await Hash.match(inputs.oldPassword, user.password))) {
      throw new ValidationFailed({
        oldPassword: ['Wrong password entered.'],
      });
    }

    // assign new password
    inputs.password = await Hash.make(inputs.newPassword);
    await this.listener.changePassword(user, inputs);
    return true;
  }

  /**
   * Login as consumer
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
    user.token = this.getToken(user);
    return user;
  }
  /**
   * Get JWT Token for user
   * @param user
   */
  private getToken(user): string {
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
}
