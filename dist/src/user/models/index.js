"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModels = void 0;
const user_1 = require("./user");
const models = [
    { name: 'User', schema: user_1.default }
];
const getModels = function () {
    return models;
};
exports.getModels = getModels;
//# sourceMappingURL=index.js.map