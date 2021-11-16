"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("../libs/core/src");
exports.default = config_1.registerAs('db', () => ({
    type: process.env.DB_TYPE || '',
    host: process.env.DB_HOST || '',
    port: process.env.DB_PORT || '',
    uri: process.env.DB_HOST || '',
    username: process.env.DB_USER || '',
    password: process.env.DB_PASSWORD || '',
    database: process.env.DB_DATABASE || '',
}));
//# sourceMappingURL=database.js.map