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
exports.ConsumerRegistration = void 0;
const validator_1 = require("../../../libs/core/src/validator");
class ConsumerRegistration {
}
__decorate([
    validator_1.IsString(),
    validator_1.MinLength(4),
    validator_1.MaxLength(255),
    __metadata("design:type", String)
], ConsumerRegistration.prototype, "firstName", void 0);
__decorate([
    validator_1.IsString(),
    validator_1.MinLength(4),
    validator_1.MaxLength(255),
    __metadata("design:type", String)
], ConsumerRegistration.prototype, "lastName", void 0);
__decorate([
    validator_1.IsString(),
    validator_1.MinLength(8),
    validator_1.MaxLength(30),
    __metadata("design:type", String)
], ConsumerRegistration.prototype, "password", void 0);
__decorate([
    validator_1.IsString(),
    validator_1.IsEqualToProp('password'),
    __metadata("design:type", String)
], ConsumerRegistration.prototype, "confirmPassword", void 0);
__decorate([
    validator_1.IsEmail(),
    validator_1.MinLength(4),
    validator_1.MaxLength(255),
    __metadata("design:type", String)
], ConsumerRegistration.prototype, "email", void 0);
__decorate([
    validator_1.IsString(),
    validator_1.MinLength(4),
    validator_1.MaxLength(255),
    __metadata("design:type", String)
], ConsumerRegistration.prototype, "username", void 0);
exports.ConsumerRegistration = ConsumerRegistration;
//# sourceMappingURL=ConsumerRegistration.js.map