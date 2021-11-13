"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WalletTransformer = void 0;
const transformers_1 = require("../../../libs/core/src/transformers");
class WalletTransformer extends transformers_1.Transformer {
    async transform(wallet) {
        return {
            balance: wallet.balance
        };
    }
}
exports.WalletTransformer = WalletTransformer;
//# sourceMappingURL=walletTransformer.js.map