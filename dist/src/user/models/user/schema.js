"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.schema = void 0;
exports.schema = {
    firstName: { type: String, default: null },
    lastName: { type: String, default: null },
    email: { type: String, default: null, lowercase: true, index: true },
    password: { type: String, default: null },
    username: { type: String, default: null }
};
//# sourceMappingURL=schema.js.map