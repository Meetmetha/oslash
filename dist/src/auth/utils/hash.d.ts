export declare class Hash {
    static make(rawString: string): Promise<string>;
    static match(rawString: string, hash: string): Promise<boolean>;
}
