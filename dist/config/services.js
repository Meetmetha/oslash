"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
exports.default = config_1.registerAs('services', () => ({
    meilisearch: {
        host: process.env.MEILISEARCH_HOST || '',
        apiKey: process.env.MEILISEARCH_APIKEY || '',
    }
}));
//# sourceMappingURL=services.js.map