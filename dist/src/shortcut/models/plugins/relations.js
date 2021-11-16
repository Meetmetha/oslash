"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.plugin = void 0;
const plugin = function (schema) {
    schema.method('rel', async function (name, force = false) {
        if (this[name] && !force) {
            this[name];
        }
        await this.populate(name).execPopulate();
        return this[name];
    });
};
exports.plugin = plugin;
//# sourceMappingURL=relations.js.map