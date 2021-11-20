"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviders = void 0;
const service_1 = require("./services/service");
const auth_service_1 = require("../auth/auth.service");
const provider_map_1 = require("./provider.map");
const database_1 = require("./repositories/database");
const providers = [
    {
        provide: provider_map_1.providerMap.SHORTCUT_REPO,
        useClass: database_1.ShortcutRepository,
    },
    service_1.ShortcutService,
];
const getProviders = function () {
    return providers;
};
exports.getProviders = getProviders;
//# sourceMappingURL=provider.js.map