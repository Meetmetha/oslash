"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviders = void 0;
const auth_service_1 = require("./auth.service");
const auth_listener_1 = require("./auth.listener");
const jwt_1 = require("./strategies/jwt");
const providers = [
    auth_service_1.AuthService,
    auth_listener_1.Listener,
    jwt_1.JwtStrategy
];
const getProviders = function () {
    return providers;
};
exports.getProviders = getProviders;
//# sourceMappingURL=provider.js.map