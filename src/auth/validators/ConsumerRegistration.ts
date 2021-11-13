import {
  IsEmail,
  IsString,
  IsBoolean,
  MinLength,
  MaxLength,
  IsEqualToProp,
  IsOptional,
} from '@libs/core/validator';

export class ConsumerRegistration {
  @IsString()
  @MinLength(4)
  @MaxLength(255)
  firstName: string;

  @IsString()
  @MinLength(4)
  @MaxLength(255)
  lastName: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  password: string;

  @IsString()
  @IsEqualToProp('password')
  confirmPassword: string;

  @IsEmail()
  @MinLength(4)
  @MaxLength(255)
  email: string;

  @IsString()
  @MinLength(4)
  @MaxLength(255)
  username: string;
}
