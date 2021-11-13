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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreditAiiToken = void 0;
const common_1 = require("@nestjs/common");
const provider_map_1 = require("../provider.map");
let CreditAiiToken = class CreditAiiToken {
    constructor(wallets, transactions) {
        this.wallets = wallets;
        this.transactions = transactions;
    }
    async handle({ wallet, options }) {
        if (!wallet) {
            return null;
        }
        const transaction = await this.transactions.create({
            wallet: wallet._id,
            amount: options.tokens,
            isCredit: true,
            meta: options,
        });
        await this.wallets.update(wallet, {
            balance: wallet.balance + transaction.amount,
        });
        return transaction;
    }
};
CreditAiiToken = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(provider_map_1.providerMap.WALLET_REPO)),
    __param(1, common_1.Inject(provider_map_1.providerMap.TRANSACTION_REPO)),
    __metadata("design:paramtypes", [typeof (_a = typeof contracts_1.WalletRepository !== "undefined" && contracts_1.WalletRepository) === "function" ? _a : Object, Object])
], CreditAiiToken);
exports.CreditAiiToken = CreditAiiToken;
//# sourceMappingURL=creditAiiTokens.js.map