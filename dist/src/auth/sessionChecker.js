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
exports.SessionChecker = void 0;
const common_1 = require("@nestjs/common");
const contracts_1 = require("./repositories/contracts");
const container_1 = require("./container");
let SessionChecker = class SessionChecker {
    constructor(tokens) {
        this.tokens = tokens;
    }
    async use(req, res, next) {
        const header = req.headers.authorization;
        if (!header) {
            throw new common_1.UnauthorizedException();
        }
        const jwt = header.replace('Bearer', '').trim();
        const sessionBlacklist = await this.tokens.getWhere({ token: jwt }, false);
        if (sessionBlacklist.length >= 1) {
            throw new common_1.UnauthorizedException();
        }
        else {
            next();
        }
    }
};
SessionChecker = __decorate([
    common_1.Injectable(),
    __param(0, common_1.Inject(container_1.container.TOKEN_REPOSITORY)),
    __metadata("design:paramtypes", [Object])
], SessionChecker);
exports.SessionChecker = SessionChecker;
//# sourceMappingURL=sessionChecker.js.map