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
exports.WalletService = void 0;
const container_1 = require("../../wallet/container");
const common_1 = require("@nestjs/common");
const validator_1 = require("../../../libs/core/src/validator");
const Wallet_1 = require("../../wallet/repositories/contracts/Wallet");
const validator_2 = require("../validator");
let WalletService = class WalletService {
    constructor(validator, wallet) {
        this.validator = validator;
        this.wallet = wallet;
    }
    async getbalance(inputs, error = true) {
        const userwallet = await this.wallet.firstWhere(inputs, error);
        if (userwallet == null) {
            console.log("null");
        }
        return userwallet;
    }
    async addBalance(user, inputs) {
        await this.validator.fire(inputs, validator_2.addWallet);
        const userwallet = await this.wallet.createOrUpdate(user, inputs);
        return await this.wallet.refresh(user);
    }
    async withdrawBalance(user, inputs) {
        await this.validator.fire(inputs, validator_2.withdrawWallet);
        await this.wallet.update(user, inputs);
        return await this.wallet.refresh(user);
    }
    async getWhere(inputs) {
        return await this.wallet.getWhere(inputs);
    }
};
WalletService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(container_1.container.WALLET_REPOSITORY)),
    __metadata("design:paramtypes", [validator_1.BaseValidator, Object])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=wallet.service.js.map