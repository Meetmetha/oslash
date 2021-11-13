import { IsEmail, MinLength, MaxLength, Exists } from '@libs/core/validator';

export class ConsumerLogin {
  @MinLength(1)
  @MaxLength(30)
  password: string;

  @IsEmail()
  email: string;
}
