"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuthModule = void 0;
const container_1 = require("./container");
const common_1 = require("@nestjs/common");
const user_1 = require("../user");
const auth_controller_1 = require("./auth.controller");
const jwt_1 = require("@nestjs/jwt");
const config_1 = require("@nestjs/config");
const passport_1 = require("@nestjs/passport");
const provider_1 = require("./provider");
const models_1 = require("./models");
const mongoose_1 = require("@nestjs/mongoose");
const database_1 = require("./repositories/database");
const shortcut_1 = require("../shortcut");
let AuthModule = class AuthModule {
};
AuthModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
            user_1.UserModule,
            passport_1.PassportModule.register({ defaultStrategy: 'jwt' }),
            jwt_1.JwtModule.registerAsync({
                imports: [config_1.ConfigModule],
                useFactory: async (configService) => ({
                    secret: configService.get('auth.jwt.secret'),
                    signOptions: { expiresIn: configService.get('auth.jwt.ttl') },
                }),
                inject: [config_1.ConfigService],
            }),
            mongoose_1.MongooseModule.forFeature(models_1.getModels(), 'database')
        ],
        controllers: [auth_controller_1.AuthController],
        providers: provider_1.getProviders(),
        exports: [
            {
                provide: container_1.container.TOKEN_REPOSITORY,
                useClass: database_1.TokenRepository,
            },
        ],
    })
], AuthModule);
exports.AuthModule = AuthModule;
//# sourceMappingURL=index.js.map