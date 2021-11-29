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

  export class removeShortcut{

    @IsString()
    @MinLength(15)
    @MaxLength(30)
    shortcutid!: string;

  }