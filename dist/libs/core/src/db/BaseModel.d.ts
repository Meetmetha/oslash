import { Model, RelationExpression } from 'objection';
import { CustomQueryBuilder } from './QueryBuilder';
export declare class BaseModel extends Model {
    readonly id: number | undefined;
    QueryBuilderType: CustomQueryBuilder<this>;
    static QueryBuilder: typeof CustomQueryBuilder;
    static useLimitInFirst: boolean;
    static modulePaths: never[];
    static setModulePaths(this: any, modules: string[]): void;
    static get modelPaths(): string[];
    fetchRelation(this: any, expression: RelationExpression<any>, options?: {}): Promise<any>;
}
