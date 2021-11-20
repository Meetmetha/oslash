"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthService = void 0;
const common_1 = require("@nestjs/common");
const auth_listener_1 = require("./auth.listener");
const container_1 = require("./container");
const helpers_1 = require("../../libs/core/src/helpers");
const exceptions_1 = require("../../libs/core/src/exceptions");
const validator_1 = require("../../libs/core/src/validator");
const contracts_1 = require("./repositories/contracts");
const validators_1 = require("./validators");
const jwt_1 = require("@nestjs/jwt");
const utils_1 = require("./utils");
const config_1 = require("@nestjs/config");
let AuthService = class AuthService {
    constructor(http, listener, config, validator, jwtService, tokens) {
        this.http = http;
        this.listener = listener;
        this.config = config;
        this.validator = validator;
        this.jwtService = jwtService;
        this.tokens = tokens;
    }
    async consumerRegistration(inputs) {
        await this.validator.fire(inputs, validators_1.ConsumerRegistration);
        inputs.password = await utils_1.Hash.make(inputs.password);
        inputs.email = inputs.email.toLowerCase();
        const user = await this.listener.createUser(inputs);
        user.token = this.getToken(user);
        return user;
    }
    async consumerLogout(header, user) {
        const jwt = header.replace('Bearer', '').trim();
        const alreadyLoggedOut = await this.tokens.getWhere({ token: jwt });
        if (alreadyLoggedOut.length >= 1) {
            throw new common_1.BadRequestException("You are already Logged Out of this Token Session");
        }
        return await this.tokens.create({ user: user._id, token: jwt });
    }
    async consumerLogin(inputs) {
        await this.validator.fire(inputs, validators_1.ConsumerLogin);
        const user = await this.listener.usersSearchFirst({
            email: inputs.email.toLowerCase(),
        });
        if (!(await utils_1.Hash.match(inputs.password, user.password))) {
            throw new exceptions_1.InvalidCredentials();
        }
        user.token = this.getToken(user);
        return user;
    }
    getToken(user) {
        return this.jwtService.sign({
            sub: user._id,
        });
    }
    async getUserById(_id) {
        return await this.listener.usersSearchFirst({ _id });
    }
    async checkSessionblacklist(tokenvalue) {
        return await this.tokens.getWhere({ token: tokenvalue }, false);
    }
};
AuthService = __decorate([
    common_1.Injectable(),
    __param(5, common_1.Inject(container_1.container.TOKEN_REPOSITORY)),
    __metadata("design:paramtypes", [common_1.HttpService,
        auth_listener_1.Listener,
        config_1.ConfigService,
        validator_1.BaseValidator,
        jwt_1.JwtService, Object])
], AuthService);
exports.AuthService = AuthService;
//# sourceMappingURL=auth.service.js.map