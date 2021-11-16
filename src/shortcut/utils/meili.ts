require('dotenv').config();
import { MeiliSearch } from 'meilisearch'
const meiliclient = new MeiliSearch({
    host: process.env.MEILISEARCH_HOST,
    apiKey: process.env.MEILISEARCH_APIKEY,
})
const meiliSearchIndex = meiliclient.index('shortcuts')

export class Meili {
  static async searchShortcut(searchQuery: string, userid: string): Promise<any> {
    //return await meiliSearchIndex.search(searchQuery, {filter[user:userid]});
    return meiliSearchIndex.search(searchQuery, {
      filter: `user = ${userid}`
    })
  }

  static async addShortcut(userShortcutData: Array<any>): Promise<any> {
    return await meiliSearchIndex.addDocuments(userShortcutData);
  }

  static async deleteShortcut(deleteDocument: string): Promise<any> {
    return await meiliSearchIndex.deleteDocument(deleteDocument);
  }

  static async updateShortcut(updateDocument: string): Promise<any> {
    return await meiliSearchIndex.search(updateDocument);
  }
}
