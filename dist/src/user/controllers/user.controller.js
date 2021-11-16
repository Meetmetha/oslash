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
exports.UserController = void 0;
const guards_1 = require("../../auth/guards");
const controllers_1 = require("../../../libs/core/src/controllers");
const user_service_1 = require("../services/user.service");
const Transformers_1 = require("../Transformers");
const common_1 = require("@nestjs/common");
let UserController = class UserController extends controllers_1.ApiController {
    constructor(users) {
        super();
        this.users = users;
    }
    async getProfile(req, res) {
        return res.success(await this.transform(req.user, new Transformers_1.DetailTransformer, { req }));
    }
};
__decorate([
    common_1.Get('/profile'),
    common_1.UseGuards(guards_1.MustBeAuthenticated),
    __param(0, common_1.Req()),
    __param(1, common_1.Res()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Object, Object]),
    __metadata("design:returntype", Promise)
], UserController.prototype, "getProfile", null);
UserController = __decorate([
    common_1.Controller(''),
    __metadata("design:paramtypes", [user_service_1.UserService])
], UserController);
exports.UserController = UserController;
//# sourceMappingURL=user.controller.js.map