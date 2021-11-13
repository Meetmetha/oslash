"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const config_1 = require("@nestjs/config");
const core_1 = require("../libs/core/src");
exports.default = config_1.registerAs('db', () => ({
    type: process.env.DB_TYPE || 'mongodb',
    host: process.env.DB_HOST || 'mongodb+srv://dbmitesh:81cPPOpTJVMeqpYN@cluster0.iofqb.mongodb.net/',
    port: process.env.DB_PORT || 27017,
    uri: process.env.DB_HOST || 'mongodb+srv://dbmitesh:81cPPOpTJVMeqpYN@cluster0.iofqb.mongodb.net/',
    username: process.env.DB_USER || 'dbmitesh',
    password: process.env.DB_PASSWORD || '81cPPOpTJVMeqpYN',
    database: process.env.DB_DATABASE || 'database',
}));
//# sourceMappingURL=database.js.map