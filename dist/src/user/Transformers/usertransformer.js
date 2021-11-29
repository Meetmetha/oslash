"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailTransformer = void 0;
const transformers_1 = require("../../../libs/core/src/transformers");
class DetailTransformer extends transformers_1.Transformer {
    constructor() {
        super(...arguments);
        this.defaultIncludes = [];
    }
    async transform(user) {
        return {
            id: user.id,
            firstName: user.firstName,
            lastName: user.lastName,
            email: user.email,
            token: user.token,
            username: user.username
        };
    }
}
exports.DetailTransformer = DetailTransformer;
//# sourceMappingURL=usertransformer.js.map