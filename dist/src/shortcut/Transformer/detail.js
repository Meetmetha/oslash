"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ShortcutTransformer = void 0;
const core_1 = require("../../../libs/core/src");
class ShortcutTransformer extends core_1.Transformer {
    async transform(Shortcut) {
        return {
            shortcutId: Shortcut._id,
            shortcutlink: Shortcut.shortlink,
            description: Shortcut.description,
            url: Shortcut.url,
            tags: Shortcut.tags,
        };
    }
}
exports.ShortcutTransformer = ShortcutTransformer;
//# sourceMappingURL=detail.js.map