export interface RepositoryContract {
    model: any;
    all(inputs?: Record<string, any>): any;
    firstWhere(inputs: Record<string, any>, error?: boolean): any;
    getWhere(inputs: Record<string, any>, error?: boolean): any;
    create(inputs: Record<string, any>): any;
    createOrUpdate(conditions: Record<string, any>, values: Record<string, any>): Promise<any>;
    firstOrNew(conditions: Record<string, any>, values: Record<string, any>): Promise<any>;
    update(model: any, setValues: Record<string, any>): any;
    updateWhere(where: Record<string, any>, setValues: Record<string, any>): any;
    count(params: Record<string, any>): Promise<number>;
    refresh(model: any): any;
    delete(model: any): Promise<boolean>;
    deleteWhere(params: any): Promise<boolean>;
    stream(conditions: Record<string, any>, callback: Function): Promise<any>;
    aggregate(inputs: Array<Record<string, any>>): Promise<any>;
    distinct(model: any): Promise<any>;
    raiseError(): void;
    query(): any;
}
