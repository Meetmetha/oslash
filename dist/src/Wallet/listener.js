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
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletListener = void 0;
const common_1 = require("@nestjs/common");
const wallet_service_1 = require("./services/wallet.service");
let WalletListener = class WalletListener {
    constructor(service) {
        this.service = service;
    }
    async fetchOne(inputs) {
        return await this.service.getbalance(inputs, false);
    }
    async getWhere(inputs) {
        return await this.service.getWhere(inputs);
    }
};
WalletListener = __decorate([
    common_1.Injectable(),
    __metadata("design:paramtypes", [wallet_service_1.WalletService])
], WalletListener);
exports.WalletListener = WalletListener;
//# sourceMappingURL=listener.js.map