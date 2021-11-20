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
exports.TokenRepository = void 0;
const core_1 = require("../../../../libs/core/src");
const common_1 = require("@nestjs/common");
const mongoose_1 = require("@nestjs/mongoose");
const helpers_1 = require("../../../../libs/core/src/helpers");
const lodash_1 = require("lodash");
let TokenRepository = class TokenRepository extends core_1.DatabaseRepository {
    async search(inputs) {
        const query = this.query();
        await query.where(inputs.user);
        return lodash_1.get(inputs, 'paginate', true)
            ? await query.paginate(inputs.page, inputs.per_page)
            : await query;
    }
};
__decorate([
    mongoose_1.InjectModel('Token'),
    __metadata("design:type", Object)
], TokenRepository.prototype, "model", void 0);
TokenRepository = __decorate([
    common_1.Injectable()
], TokenRepository);
exports.TokenRepository = TokenRepository;
//# sourceMappingURL=token.js.map