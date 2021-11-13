import { HttpService } from '@nestjs/common';
import { Listener } from './auth.listener';
import { BaseValidator } from '@libs/core/validator';
import { JwtService } from '@nestjs/jwt';
import { ConfigService } from '@nestjs/config';
export declare class AuthService {
    private http;
    private listener;
    private config;
    private validator;
    private jwtService;
    constructor(http: HttpService, listener: Listener, config: ConfigService, validator: BaseValidator, jwtService: JwtService);
    consumerRegistration(inputs: Record<string, any>): Promise<any>;
    changePassword(user: Record<string, any>, inputs: Record<string, any>): Promise<any>;
    consumerLogin(inputs: Record<string, any>): Promise<any>;
    private getToken;
    getUserById(_id: string): Promise<any>;
}
