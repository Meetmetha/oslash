"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const m = require("mongoose");
const schema_1 = require("./schema");
const plugins_1 = require("../plugins");
const Schema = new m.Schema(schema_1.schema, {
    timestamps: true,
});
Schema.plugin(plugins_1.relations);
Schema.plugin(plugins_1.queryHelpers);
Schema.virtual('name').get(function () {
    return this.firstName + ' ' + this.lastName;
});
exports.default = Schema;
//# sourceMappingURL=index.js.map