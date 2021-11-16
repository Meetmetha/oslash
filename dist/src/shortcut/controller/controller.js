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
exports.ShortcutController = void 0;
const service_1 = require("../services/service");
const Transformer_1 = require("../Transformer");
const common_1 = require("@nestjs/common");
const core_1 = require("../../../libs/core/src");
const guards_1 = require("../../auth/guards");
const validator_1 = require("../../../libs/core/src/validator");
let ShortcutController = class ShortcutController extends core_1.ApiController {
    constructor(service, validator) {
        super();
        this.service = service;
        this.validator = validator;
    }
    async getUserShortcut(req, res) {
        const Shortcut = await this.service.getUserShortcut(req.user, req.all());
        return res.success(Shortcut);
    }
    async createShortcut(req, res) {
        const Shortcut = await this.service.addShortcut(req.user, req.all());
        return res.success("Shortcut Created");
    }
    async debitfromShortcut(req, res) {
        const Shortcutdebit = await this.service.removeShortcut(req.user, req.all());
        return res.success({
            result: 'Your Shortcut is Removed',
        });
    }
};
__decorate([
    common_1.Get(''),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShortcutController.prototype, "getUserShortcut", null);
__decorate([
    common_1.Post('/create'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShortcutController.prototype, "createShortcut", null);
__decorate([
    common_1.Post('/delete'),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], ShortcutController.prototype, "debitfromShortcut", null);
ShortcutController = __decorate([
    common_1.Controller('/shortcut'),
    common_1.UseGuards(guards_1.MustBeAuthenticated),
    __metadata("design:paramtypes", [service_1.ShortcutService, validator_1.BaseValidator])
], ShortcutController);
exports.ShortcutController = ShortcutController;
//# sourceMappingURL=controller.js.map