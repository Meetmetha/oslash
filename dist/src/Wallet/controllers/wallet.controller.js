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
const guards_1 = require("../../auth/guards");
const controllers_1 = require("../../../libs/core/src/controllers");
const wallet_service_1 = require("../services/wallet.service");
const Transformers_1 = require("../../wallet/Transformers");
const common_1 = require("@nestjs/common");
let WalletController = class WalletController extends controllers_1.ApiController {
    constructor(wallet) {
        super();
        this.wallet = wallet;
    }
    async getWallet(req, res) {
        const walletdata = await this.wallet.getbalance(req.user);
        return res.success(await this.transform(walletdata, new Transformers_1.WalletTransformer, { req }));
    }
    async addwallet(req, res) {
        const addwallet = await this.wallet.addBalance(req.user, req.all());
        return res.success('Amount Credited to Wallet', addwallet);
    }
    async withdrawwallet(req, res) {
        const user = await this.wallet.withdrawBalance(req.user, req.all());
        return res.success(await this.transform(user, new Transformers_1.WalletTransformer, { req }));
    }
};
__decorate([
    common_1.Get(''),
    common_1.UseGuards(guards_1.MustBeAuthenticated),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getWallet", null);
__decorate([
    common_1.Post('/credit'),
    common_1.UseGuards(guards_1.MustBeAuthenticated),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "addwallet", null);
__decorate([
    common_1.Post('/debit'),
    common_1.UseGuards(guards_1.MustBeAuthenticated),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "withdrawwallet", null);
WalletController = __decorate([
    common_1.Controller('wallet'),
    __metadata("design:paramtypes", [wallet_service_1.WalletService])
], WalletController);
exports.WalletController = WalletController;
//# sourceMappingURL=wallet.controller.js.map