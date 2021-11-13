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
const provider_map_1 = require("./provider.map");
const config_1 = require("./config");
const common_1 = require("@nestjs/common");
const lodash_1 = require("lodash");
let WalletService = class WalletService {
    constructor(transactions, wallets) {
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
    async creditTokens(inputs) {
        var _a;
        const wallet = await this.createWallet(inputs.user);
        let options = { device: (_a = inputs === null || inputs === void 0 ? void 0 : inputs.device) === null || _a === void 0 ? void 0 : _a._id };
        options = Object.assign(Object.assign(Object.assign({}, options), config_1.EVENTS[inputs.event]), { event: inputs.event });
    }
    async getUserWalletTransactions(user, inputs) {
        const wallet = await this.wallets.firstWhere({ user: user._id });
        inputs['wallet'] = wallet._id;
        return await this.transactions.search(inputs);
    }
};
WalletService = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(provider_map_1.providerMap.TRANSACTION_REPO)),
    __param(1, common_1.Inject(provider_map_1.providerMap.WALLET_REPO)),
    __metadata("design:paramtypes", [Object, Object])
], WalletService);
exports.WalletService = WalletService;
//# sourceMappingURL=service.js.map