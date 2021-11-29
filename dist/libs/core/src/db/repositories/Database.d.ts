export declare class DatabaseRepository {
    protected model: any;
    all(inputs?: Record<string, any>): Promise<any>;
    firstWhere(inputs: Record<string, any>, error?: boolean): Promise<any>;
    getWhere(inputs: Record<string, any>, error?: boolean): Promise<any>;
    create(inputs: Record<string, any>): Promise<any>;
    createOrUpdate(conditions: Record<string, any>, values: Record<string, any>): Promise<any>;
    firstOrNew(conditions: Record<string, any>, values: Record<string, any>): Promise<any>;
    update(model: any, setValues: Record<string, any>): Promise<any>;
    updateWhere(where: Record<string, any>, setValues: Record<string, any>): Promise<any>;
    count(params: any): Promise<any>;
    distinct(key: string, conditions?: {}): Promise<any>;
    delete(model: any): Promise<boolean>;
    deleteWhere(params: any): Promise<boolean>;
    refresh(model: any): Promise<any>;
    stream(conditions: Record<string, any>, callback: Function): Promise<any>;
    aggregate(inputs: Array<Record<string, any>>): Promise<any>;
    raiseError(): void;
    query(): any;
}
