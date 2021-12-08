import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
} from '@libs/core/validator';

export class CreateUser {
  @IsString()
  @MinLength(4)
  @MaxLength(255)
  firstName!: string; //Non-null assertion operator

  @IsString()
  @MinLength(0)
  @MaxLength(255)
  lastName!: string;

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password!: string;

  @IsEmail()
  @MinLength(0)
  @MaxLength(255)
  email!: string;

  @IsString()
  @MinLength(4)
  @MaxLength(255)
  username!: string;
}
