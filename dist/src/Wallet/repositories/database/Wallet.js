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
exports.WalletRepository = void 0;
const core_1 = require("../../../../libs/core/src");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
let WalletRepository = class WalletRepository extends core_1.DatabaseRepository {
};
__decorate([
    mongoose_1.InjectModel('Wallet'),
    __metadata("design:type", Object)
], WalletRepository.prototype, "model", void 0);
WalletRepository = __decorate([
    common_1.Injectable()
], WalletRepository);
exports.WalletRepository = WalletRepository;
//# sourceMappingURL=wallet.js.map