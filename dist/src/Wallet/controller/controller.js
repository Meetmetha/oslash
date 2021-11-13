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
const service_1 = require("../services/service");
const Transformer_1 = require("../../wallet/Transformer");
const common_1 = require("@nestjs/common");
const core_1 = require("../../../libs/core/src");
const guards_1 = require("../../auth/guards");
let WalletController = class WalletController extends core_1.ApiController {
    constructor(service) {
        super();
        this.service = service;
    }
    async createWallet(req, res) {
        const wallet = await this.service.createWallet(req.user);
        return res.success("Wallet Created");
    }
    async getUserWallet(req, res) {
        const wallet = await this.service.getUserWallet(req.user);
        return res.success(await this.transform(wallet, new Transformer_1.WalletTransformer()));
    }
    async credittowallet(req, res) {
        const walletcredit = await this.service.creditWallet(req.user, req.all());
        return res.success({
            result: 'Your wallet is Credited!',
        });
    }
    async debitfromwallet(req, res) {
        const walletdebit = await this.service.debitWallet(req.user, req.all());
        return res.success({
            result: 'Your Wallet is Debited',
        });
    }
};
__decorate([
    common_1.Get('/create'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "createWallet", null);
__decorate([
    common_1.Get(''),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "getUserWallet", null);
__decorate([
    common_1.Post('/credit'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "credittowallet", null);
__decorate([
    common_1.Post('/debit'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], WalletController.prototype, "debitfromwallet", null);
WalletController = __decorate([
    common_1.Controller('/wallet'),
    common_1.UseGuards(guards_1.MustBeAuthenticated),
    __metadata("design:paramtypes", [service_1.WalletService])
], WalletController);
exports.WalletController = WalletController;
//# sourceMappingURL=controller.js.map