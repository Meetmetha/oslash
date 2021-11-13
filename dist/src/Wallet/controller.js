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
exports.WalletController = void 0;
const service_1 = require("./service");
const Transformer_1 = require("../wallet/Transformer");
const common_1 = require("@nestjs/common");
const core_1 = require("../../libs/core/src");
const guards_1 = require("../auth/guards");
let WalletController = class WalletController extends core_1.ApiController {
    constructor(service) {
        super();
        this.service = service;
    }
    async getUserWallet(req, res) {
        const wallet = await this.service.getUserWallet(req.user);
        return res.success(await this.transform(wallet, new Transformer_1.WalletTransformer()));
    }
    async getUserWalletTransactions(req, res) {
        const transactions = await this.service.getUserWalletTransactions(req.user, req.all());
        return res.withMeta(await this.paginate(transactions, new Transformer_1.TransactionTransformer(), { req }));
    }
    async redeemAiitokens(req, res) {
        return res.success({
            title: 'Hurray!',
            desc: 'We have received your request. Our team will get in touch with you shortly.',
        });
    }
};
__decorate([
    common_1.Get('/user-wallet'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getUserWallet", null);
__decorate([
    common_1.Get('/user-wallet/transactions'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getUserWalletTransactions", null);
__decorate([
    common_1.Post('/redeem-aiitokens'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "redeemAiitokens", null);
WalletController = __decorate([
    common_1.Controller('/wallets'),
    common_1.UseGuards(guards_1.MustBeAuthenticated),
    __metadata("design:paramtypes", [service_1.WalletService])
], WalletController);
exports.WalletController = WalletController;
//# sourceMappingURL=controller.js.map