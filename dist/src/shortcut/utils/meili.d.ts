export declare class Meili {
    static searchShortcut(searchQuery: string, userid: string): Promise<any>;
    static addShortcut(userShortcutData: Array<any>): Promise<any>;
    static deleteShortcut(deleteDocument: string): Promise<any>;
    static updateShortcut(updateDocument: string): Promise<any>;
}
