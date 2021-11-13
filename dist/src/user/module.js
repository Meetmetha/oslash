"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserModule = void 0;
const provider_1 = require("./provider");
const models_1 = require("./models");
const common_1 = require("@nestjs/common");
const user_controller_1 = require("./controllers/user.controller");
const user_service_1 = require("./services/user.service");
const mongoose_1 = require("@nestjs/mongoose");
const container_1 = require("./container");
const database_1 = require("./repositories/database");
const listener_1 = require("./listener");
const helpers_1 = require("../../libs/core/src/helpers");
const Wallet_1 = require("../Wallet");
let UserModule = class UserModule {
};
UserModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
            Wallet_1.WalletModule,
            mongoose_1.MongooseModule.forFeature(models_1.getModels(), 'database')
        ],
        controllers: [user_controller_1.UserController],
        providers: provider_1.getProviders(),
        exports: [
            listener_1.UserListener,
            user_service_1.UserService,
            {
                provide: container_1.container.USER_REPOSITORY,
                useClass: database_1.UserRepository,
            },
        ],
    })
], UserModule);
exports.UserModule = UserModule;
//# sourceMappingURL=module.js.map