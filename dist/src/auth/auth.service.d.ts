import { HttpService } from '@nestjs/common';
import { Listener } from './auth.listener';
import { BaseValidator } from '@libs/core/validator';
import { TokenRepository } from '@app/auth/repositories/contracts';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private http;
    private listener;
    private config;
    private validator;
    private jwtService;
    private tokens;
    constructor(http: HttpService, listener: Listener, config: ConfigService, validator: BaseValidator, jwtService: JwtService, tokens: TokenRepository);
    consumerRegistration(inputs: Record<string, any>): Promise<any>;
    consumerLogout(header: Record<string, any>, user: Record<string, any>): Promise<any>;
    consumerLogin(inputs: Record<string, any>): Promise<any>;
    private getToken;
    getUserById(_id: string): Promise<any>;
    checkSessionblacklist(tokenvalue: string): Promise<any>;
}
