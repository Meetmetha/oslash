"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.MustBeAuthenticated = void 0;
const common_1 = require("@nestjs/common");
const passport_1 = require("@nestjs/passport");
let MustBeAuthenticated = class MustBeAuthenticated extends passport_1.AuthGuard('jwt') {
    canActivate(context) {
        const request = context.switchToHttp().getRequest();
        return super.canActivate(context);
    }
    handleRequest(err, user, info) {
        if (err || !user) {
            throw err || new common_1.UnauthorizedException();
        }
        return user;
    }
};
MustBeAuthenticated = __decorate([
    common_1.Injectable()
], MustBeAuthenticated);
exports.MustBeAuthenticated = MustBeAuthenticated;
//# sourceMappingURL=mustBeAuthenticated.js.map