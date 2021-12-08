import {
    IsString,
    MinLength,
    MaxLength,
  } from '../../../libs/core/src/validator';

  export class removeShortcut{

    @IsString()
    @MinLength(15)
    @MaxLength(30)
    shortcutid!: string;

  }