"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviders = void 0;
const console_1 = require("./console");
const http_1 = require("./http");
const validator_1 = require("./validator");
const isUnique_1 = require("./validator/decorators/isUnique");
const isValueFromConfig_1 = require("./validator/decorators/isValueFromConfig");
const providers = [
    console_1.ListCommands,
    console_1.InitApplicationSetup,
    validator_1.BaseValidator,
    http_1.HttpExplorer,
    isUnique_1.IsUniqueConstraint,
    validator_1.ExistsConstraint,
    isValueFromConfig_1.IsValueFromConfigConstraint,
];
const getProviders = function () {
    return providers;
};
exports.getProviders = getProviders;
//# sourceMappingURL=providers.js.map