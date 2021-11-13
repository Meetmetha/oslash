import { ValidationOptions, ValidationArguments, ValidatorConstraintInterface } from 'class-validator';
import { Connection } from 'mongoose';
export declare class IsUniqueConstraint implements ValidatorConstraintInterface {
    private connection;
    constructor(connection: Connection);
    validate(value: string, args: ValidationArguments): Promise<boolean>;
    defaultMessage(args: ValidationArguments): string;
}
export declare function IsUnique(options: Record<string, any>, validationOptions?: ValidationOptions): (object: Record<string, any>, propertyName: string) => void;
