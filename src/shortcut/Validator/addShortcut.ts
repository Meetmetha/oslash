import {
    IsEmail,
    IsString,
    MinLength,
    MaxLength,
    IsNumber,
    IsUnique,
    IsUrl,
    IsArray,
    IsOptional
  } from '@libs/core/validator';

  export class addShortcut{

    @IsString()
    @MinLength(1)
    shortlink!: string;

    @IsUrl()
    @MaxLength(500)
    @MinLength(1)
    url!: string;

    @IsString()
    @MaxLength(100)
    @IsOptional()
    description?: string;

    @IsArray()
    @IsOptional()
    tags!: [string];


  }