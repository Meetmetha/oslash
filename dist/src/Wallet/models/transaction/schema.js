"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const m = require("mongoose");
exports.schema = {
    wallet: {
        type: m.Schema.Types.ObjectId,
        ref: 'Wallet',
        index: true,
    },
    amount: {
        type: Number,
        default: null,
    },
    isCredit: {
        type: Boolean,
        default: false,
    },
    meta: {
        event: String,
        device: String,
    },
};
//# sourceMappingURL=schema.js.map