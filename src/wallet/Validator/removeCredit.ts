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

  export class removeCredit{

    @IsNumber()
    @Min(1)
    balance: number;

  }