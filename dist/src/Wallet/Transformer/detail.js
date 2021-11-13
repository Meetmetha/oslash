"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletTransformer = void 0;
const core_1 = require("../../../libs/core/src");
class WalletTransformer extends core_1.Transformer {
    constructor() {
        super(...arguments);
        this.availableIncludes = [];
        this.defaultIncludes = [];
    }
    async transform(wallet) {
        return {
            walletId: wallet._id,
            balance: wallet.balance
        };
    }
}
exports.WalletTransformer = WalletTransformer;
//# sourceMappingURL=detail.js.map