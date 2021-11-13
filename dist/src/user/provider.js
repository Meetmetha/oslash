"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviders = exports.container = void 0;
const container_1 = require("./container");
Object.defineProperty(exports, "container", { enumerable: true, get: function () { return container_1.container; } });
const listener_1 = require("./listener");
const user_service_1 = require("./services/user.service");
const database_1 = require("./repositories/database");
const providers = [
    {
        provide: container_1.container.USER_REPOSITORY,
        useClass: database_1.UserRepository,
    },
    listener_1.UserListener,
    user_service_1.UserService,
];
const getProviders = function () {
    return providers;
};
exports.getProviders = getProviders;
//# sourceMappingURL=provider.js.map