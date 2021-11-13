"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Hash = void 0;
const bcrypt = require("bcrypt");
const options = {
    saltRounds: 7,
};
class Hash {
    static async make(rawString) {
        return await bcrypt.hash(rawString, options.saltRounds);
    }
    static async match(rawString, hash) {
        return await bcrypt.compare(rawString, hash);
    }
}
exports.Hash = Hash;
//# sourceMappingURL=hash.js.map