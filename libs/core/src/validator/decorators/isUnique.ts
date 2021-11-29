import {
  registerDecorator,
  ValidationOptions,
  ValidationArguments,
  ValidatorConstraint,
  ValidatorConstraintInterface,
} from 'class-validator';
import { Injectable, Inject } from '@nestjs/common';
import { InjectConnection } from '@nestjs/mongoose';
import { Connection } from 'mongoose';
import { isEmpty } from '@libs/core/helpers';
import { number, string } from 'yargs';

@Injectable()
@ValidatorConstraint({ async: true })
export class IsUniqueConstraint implements ValidatorConstraintInterface {
  constructor(@InjectConnection('database') private connection: typeof Connection) {}

  /*public async validate(
    value: string | string[],
    args: ValidationArguments,
  ): Promise<boolean> {
    if (isEmpty(value)) return false;

    const [{ table, column, caseInsensitive, where }] = args.constraints;

    if (caseInsensitive) {
      value = Array.isArray(value)
        ? value.map((v) => v.toLowerCase())
        : value.toLowerCase();
    }

    const query = this.connection(table);
    Array.isArray(value)
      ? query.whereIn(column, value)
      : query.where(column, value);

    if (where) query.where(where);

    const result = await query.count({ count: '*' });
    const record = result.first() || {};
    const count = +record['count'];
    return Array.isArray(value) ? !!!(value.length === count) : !!!count;
  }*/
  public validate(value: string, args: ValidationArguments): Promise<boolean> {
    const [options] = args.constraints;
    const params: {[index: string]:any} = {}
    params[options.column] = value;

    if (options.caseInsensitive) {
      params[options.column] =
        typeof value === 'string' ? value.toLowerCase() : value;
    }

    return this.connection
      .collection(options.collection)
      .findOne(params)
      .then((count: any) => {
        return !!!count;
      });
  }

  defaultMessage(args: ValidationArguments) {
    const [options] = args.constraints;
    return `${options.column} already exists.`;
  }
}

export function IsUnique(
  options: Record<string, any>,
  validationOptions?: ValidationOptions,
) {
  return function (object: Record<string, any>, propertyName: string): void {
    registerDecorator({
      target: object.constructor,
      propertyName: propertyName,
      options: validationOptions,
      constraints: [options],
      validator: IsUniqueConstraint,
    });
  };
}
