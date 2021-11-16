"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
const m = require("mongoose");
exports.schema = {
    user: {
        type: m.Schema.Types.ObjectId,
        ref: 'User',
    },
    shortlink: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        default: null,
    },
    url: {
        type: String,
        required: true,
    },
    tags: {
        type: Array,
        default: null,
    }
};
//# sourceMappingURL=schema.js.map