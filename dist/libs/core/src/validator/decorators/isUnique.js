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
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.IsUnique = exports.IsUniqueConstraint = void 0;
const class_validator_1 = require("class-validator");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const mongoose_2 = require("mongoose");
const helpers_1 = require("../../helpers");
let IsUniqueConstraint = class IsUniqueConstraint {
    constructor(connection) {
        this.connection = connection;
    }
    validate(value, args) {
        const [options] = args.constraints;
        const params = {};
        params[options.column] = value;
        if (options.caseInsensitive) {
            params[options.column] =
                typeof value === 'string' ? value.toLowerCase() : value;
        }
        return this.connection
            .collection(options.collection)
            .findOne(params)
            .then(count => {
            return !!!count;
        });
    }
    defaultMessage(args) {
        const [options] = args.constraints;
        return `${options.column} already exists.`;
    }
};
IsUniqueConstraint = __decorate([
    common_1.Injectable(),
    class_validator_1.ValidatorConstraint({ async: true }),
    __param(0, mongoose_1.InjectConnection('database')),
    __metadata("design:paramtypes", [typeof (_a = typeof mongoose_2.Connection !== "undefined" && mongoose_2.Connection) === "function" ? _a : Object])
], IsUniqueConstraint);
exports.IsUniqueConstraint = IsUniqueConstraint;
function IsUnique(options, validationOptions) {
    return function (object, propertyName) {
        class_validator_1.registerDecorator({
            target: object.constructor,
            propertyName: propertyName,
            options: validationOptions,
            constraints: [options],
            validator: IsUniqueConstraint,
        });
    };
}
exports.IsUnique = IsUnique;
//# sourceMappingURL=isUnique.js.map