import {
  IsEmail,
  IsString,
  MinLength,
  MaxLength,
  IsUnique
} from '@libs/core/validator';

export class CreateUser {
  @IsString()
  @MinLength(4)
  @MaxLength(255)
  firstName: string;

  @IsString()
  @MinLength(0)
  @MaxLength(255)
  lastName: string;

  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password: string;

  @IsEmail()
  @MinLength(0)
  @MaxLength(255)
  @IsUnique({ collection: 'users', column: 'email', caseInsensitive: true })
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(255)
  username: string;
}
