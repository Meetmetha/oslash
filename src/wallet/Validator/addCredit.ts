import {
    IsEmail,
    IsString,
    MinLength,
    MaxLength,
    IsNumber,
    IsUnique,
    Max,
    Min
  } from '@libs/core/validator';

  export class addCredit{

    @IsNumber()
    @Max(10000)
    @Min(1)
    balance: number;

  }