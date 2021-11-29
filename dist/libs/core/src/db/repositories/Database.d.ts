export declare class DatabaseRepository {
    protected model: null;
    all(inputs?: Record<string, any>): Promise<any>;
    firstWhere(inputs: Record<string, any>, error?: boolean): Promise<any>;
    getWhere(inputs: Record<string, any>, error?: boolean): Promise<any>;
    create(this: any, inputs: Record<string, any>): Promise<any>;
    createOrUpdate(conditions: Record<string, any>, values: Record<string, any>): Promise<any>;
    firstOrNew(conditions: Record<string, any>, values: Record<string, any>): Promise<any>;
    update(this: typeof model, model: any, setValues: Record<string, any>): Promise<any>;
    updateWhere(this: any, where: Record<string, any>, setValues: Record<string, any>): Promise<any>;
    count(params: any): Promise<any>;
    distinct(key: string, conditions?: {}): Promise<any>;
    delete(this: typeof model, model: any): Promise<boolean>;
    deleteWhere(this: any, params: any): Promise<boolean>;
    refresh(model: any): Promise<any>;
    stream(conditions: Record<string, any>, callback: Function): Promise<any>;
    aggregate(this: any, inputs: Array<Record<string, any>>): Promise<any>;
    raiseError(this: any): void;
    query(this: any): any;
}
