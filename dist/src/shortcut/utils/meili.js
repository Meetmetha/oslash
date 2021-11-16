"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Meili = void 0;
require('dotenv').config();
const meilisearch_1 = require("meilisearch");
const meiliclient = new meilisearch_1.MeiliSearch({
    host: process.env.MEILISEARCH_HOST,
    apiKey: process.env.MEILISEARCH_APIKEY,
});
const meiliSearchIndex = meiliclient.index('shortcuts');
class Meili {
    static async searchShortcut(searchQuery, userid) {
        return meiliSearchIndex.search(searchQuery, {
            filter: `user = ${userid}`
        });
    }
    static async addShortcut(userShortcutData) {
        return await meiliSearchIndex.addDocuments(userShortcutData);
    }
    static async deleteShortcut(deleteDocument) {
        return await meiliSearchIndex.deleteDocument(deleteDocument);
    }
    static async updateShortcut(updateDocument) {
        return await meiliSearchIndex.search(updateDocument);
    }
}
exports.Meili = Meili;
//# sourceMappingURL=meili.js.map