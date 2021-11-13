"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletModule = void 0;
const provider_1 = require("./provider");
const models_1 = require("./models");
const common_1 = require("@nestjs/common");
const wallet_controller_1 = require("./controllers/wallet.controller");
const wallet_service_1 = require("./services/wallet.service");
const mongoose_1 = require("@nestjs/mongoose");
const container_1 = require("./container");
const database_1 = require("./repositories/database");
const listener_1 = require("./listener");
const helpers_1 = require("../../libs/core/src/helpers");
let WalletModule = class WalletModule {
};
WalletModule = __decorate([
    common_1.Module({
        imports: [
            common_1.HttpModule,
            mongoose_1.MongooseModule.forFeature(models_1.getModels(), 'database')
        ],
        controllers: [wallet_controller_1.WalletController],
        providers: provider_1.getProviders(),
        exports: [
            listener_1.WalletListener,
            wallet_service_1.WalletService,
            {
                provide: container_1.container.WALLET_REPOSITORY,
                useClass: database_1.WalletRepository,
            },
        ],
    })
], WalletModule);
exports.WalletModule = WalletModule;
//# sourceMappingURL=module.js.map