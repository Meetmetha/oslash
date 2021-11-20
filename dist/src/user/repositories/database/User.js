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
exports.UserRepository = void 0;
const db_1 = require("../../../../libs/core/src/db");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const m = require("mongoose");
const helpers_1 = require("../../../../libs/core/src/helpers");
const lodash_1 = require("lodash");
let UserRepository = class UserRepository extends db_1.DatabaseRepository {
    async search(inputs) {
        const query = this.query();
        if (inputs._id) {
            inputs._id = helpers_1.cast(inputs._id, m.Types.ObjectId);
            query.find(inputs);
        }
        if (inputs._ids) {
            query.find({ _id: inputs._ids });
        }
        if (inputs.q) {
            query.find({
                email: { $regex: inputs.q, $options: 'i' },
            });
        }
        if (inputs.sort) {
            query.sort({ createdAt: -1 });
        }
        if (inputs.where) {
            query.find(inputs.where);
        }
        return lodash_1.get(inputs, 'paginate', true)
            ? await query.paginate(inputs.page, inputs.per_page)
            : await query;
    }
};
__decorate([
    mongoose_1.InjectModel('User'),
    __metadata("design:type", Object)
], UserRepository.prototype, "model", void 0);
UserRepository = __decorate([
    common_1.Injectable()
], UserRepository);
exports.UserRepository = UserRepository;
//# sourceMappingURL=User.js.map