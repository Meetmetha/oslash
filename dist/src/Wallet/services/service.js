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
const provider_map_1 = require("../provider.map");
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
const Validator_1 = require("../../wallet/Validator");
const validator_1 = require("../../../libs/core/src/validator");
const exceptions_1 = require("../../../libs/core/src/exceptions");
let WalletService = class WalletService {
    constructor(validator, transactions, wallets) {
        this.validator = validator;
        this.transactions = transactions;
        this.wallets = wallets;
    }
    async getUserWallet(user) {
        return await this.wallets.firstWhere({ user: user._id });
    }
    async createWallet(user, options) {
        const wallet = await this.wallets.firstWhere({ user: user._id }, false);
        if (wallet) {
            return wallet;
        }
        const balance = lodash_1.get(options || {}, 'balance', 0);
        return await this.wallets.create({
            user: user._id,
            balance,
        });
    }
    async creditWallet(user, inputs) {
        await this.validator.fire(inputs, Validator_1.addCredit);
        const userwallet = await this.wallets.firstWhere({ user: user._id });
        const walletcredit = await this.wallets.update(userwallet, { balance: +userwallet.balance + inputs.balance });
        return walletcredit;
    }
    async debitWallet(user, inputs) {
        await this.validator.fire(inputs, Validator_1.removeCredit);
        const userwallet = await this.wallets.firstWhere({ user: user._id });
        if (userwallet.balance < inputs.balance) {
            throw new common_1.BadRequestException("Insufficient Balance to Redeem please Credit");
        }
        const walletdebit = await this.wallets.update(userwallet, { balance: +userwallet.balance - inputs.balance });
        return walletdebit;
    }
    async getUserWalletTransactions(user, inputs) {
        const wallet = await this.wallets.firstWhere({ user: user._id });
        inputs['wallet'] = wallet._id;
        return await this.transactions.search(inputs);
    }
};
WalletService = __decorate([
    common_1.Injectable(),
    __param(1, common_1.Inject(provider_map_1.providerMap.TRANSACTION_REPO)),
    __param(2, common_1.Inject(provider_map_1.providerMap.WALLET_REPO)),
    __metadata("design:paramtypes", [validator_1.BaseValidator, Object, Object])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=service.js.map