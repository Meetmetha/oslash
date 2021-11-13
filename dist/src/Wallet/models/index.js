"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getModels = void 0;
const wallet_1 = require("./wallet");
const transaction_1 = require("./transaction");
const models = [
    { name: 'Wallet', schema: wallet_1.default },
    { name: 'Transaction', schema: transaction_1.default },
];
const getModels = function () {
    return models;
};
exports.getModels = getModels;
//# sourceMappingURL=index.js.map