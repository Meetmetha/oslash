"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getProviders = void 0;
const service_1 = require("./services/service");
const provider_map_1 = require("./provider.map");
const database_1 = require("./repositories/database");
const providers = [
    {
        provide: provider_map_1.providerMap.TRANSACTION_REPO,
        useClass: database_1.TransactionRepository,
    },
    {
        provide: provider_map_1.providerMap.WALLET_REPO,
        useClass: database_1.WalletRepository,
    },
    service_1.WalletService,
];
const getProviders = function () {
    return providers;
};
exports.getProviders = getProviders;
//# sourceMappingURL=provider.js.map