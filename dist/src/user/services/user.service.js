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
exports.UserService = void 0;
const container_1 = require("../container");
const common_1 = require("@nestjs/common");
const validator_1 = require("../../../libs/core/src/validator");
const User_1 = require("../repositories/contracts/User");
const validator_2 = require("../validator");
const utils_1 = require("../../auth/utils");
const exceptions_1 = require("../../../libs/core/src/exceptions");
const service_1 = require("../../shortcut/services/service");
let UserService = class UserService {
    constructor(validator, service, users) {
        this.validator = validator;
        this.service = service;
        this.users = users;
    }
    async get(inputs, error = true) {
        return await this.users.firstWhere(inputs, error);
    }
    async createConsumer(inputs) {
        await this.validator.fire(inputs, validator_2.CreateUser);
        const user = await this.users.create(inputs);
        return user;
    }
    async getWhere(inputs) {
        return await this.users.getWhere(inputs);
    }
};
UserService = __decorate([
    common_1.Injectable(),
    __param(2, common_1.Inject(container_1.container.USER_REPOSITORY)),
    __metadata("design:paramtypes", [validator_1.BaseValidator,
        service_1.ShortcutService, Object])
], UserService);
exports.UserService = UserService;
//# sourceMappingURL=user.service.js.map