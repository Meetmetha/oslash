"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviders = void 0;
const container_1 = require("./container");
const auth_service_1 = require("./auth.service");
const auth_listener_1 = require("./auth.listener");
const jwt_1 = require("./strategies/jwt");
const database_1 = require("./repositories/database");
const sessionChecker_1 = require("./sessionChecker");
const providers = [
    auth_service_1.AuthService,
    auth_listener_1.Listener,
    sessionChecker_1.SessionChecker,
    jwt_1.JwtStrategy,
    {
        provide: container_1.container.TOKEN_REPOSITORY,
        useClass: database_1.TokenRepository,
    },
];
const getProviders = function () {
    return providers;
};
exports.getProviders = getProviders;
//# sourceMappingURL=provider.js.map