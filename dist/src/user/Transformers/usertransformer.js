"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailTransformer = void 0;
const transformers_1 = require("../../../libs/core/src/transformers");
const lodash_1 = require("lodash");
class DetailTransformer extends transformers_1.Transformer {
    constructor() {
        super(...arguments);
        this.availableIncludes = ['wallet'];
        this.defaultIncludes = [];
    }
    async transform(user) {
        return {
            id: user.id,
            firstName: lodash_1.startCase(lodash_1.toLower(user.firstName)),
            lastName: lodash_1.capitalize(user.lastName),
            email: user.email,
            token: user.token,
            username: user.username
        };
    }
    async includeWallet(user) {
        const wallet = await user.rel('wallet');
        return this.primitive({ balance: wallet.balance });
    }
}
exports.DetailTransformer = DetailTransformer;
//# sourceMappingURL=usertransformer.js.map