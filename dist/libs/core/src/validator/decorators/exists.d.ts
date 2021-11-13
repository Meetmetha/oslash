import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import Knex = require('knex');
export declare class ExistsConstraint implements ValidatorConstraintInterface {
    private connection;
    constructor(connection: Knex);
    validate(value: string | string[], args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function Exists(options: {
    table: string;
    column?: string;
    caseInsensitive?: boolean;
    where?: Record<string, any>;
}, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
