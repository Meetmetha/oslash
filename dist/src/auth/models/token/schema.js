"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const m = require("mongoose");
exports.schema = {
    user: {
        type: m.Schema.Types.ObjectId,
        ref: 'User',
    },
    token: {
        type: String,
        required: true,
        index: true,
    }
};
//# sourceMappingURL=schema.js.map