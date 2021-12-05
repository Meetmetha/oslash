require('dotenv').config();
import { MeiliSearch } from 'meilisearch'
const meiliclient = new MeiliSearch({
    host: process.env.MEILISEARCH_HOST as string,
    apiKey: process.env.MEILISEARCH_APIKEY,
})
const meiliSearchIndex = meiliclient.index('shortcuts')

export class Meili {
  /**
   * Search in Meilisearch 
   * @param searchQuery 
   * @param userid 
   */
  static async searchShortcut(searchQuery: string, userid: string): Promise<any> {
    return meiliSearchIndex.search(searchQuery, {
      filter: `user = ${userid}`
    })
  }

  /**
   * Add document to Meilisearch
   * @param userShortcutData
   */
  static async addShortcut(userShortcutData: Array<any>): Promise<any> {
    return await meiliSearchIndex.addDocuments(userShortcutData);
  }

  /**
   * Delete document from Meilisearch
   * @param deleteDocument
   */
  static async deleteShortcut(deleteDocument: string): Promise<any> {
    return await meiliSearchIndex.deleteDocument(deleteDocument);
  }
}
