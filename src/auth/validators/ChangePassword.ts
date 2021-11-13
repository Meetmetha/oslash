import {
  IsString,
  MinLength,
  MaxLength,
  IsEqualToProp,
} from '@libs/core/validator';

export class ChangePassword {
  @IsString()
  oldPassword: string;

  @IsString()
  @MinLength(8)
  @MaxLength(30)
  newPassword: string;

  @IsString()
  @IsEqualToProp('newPassword')
  newConfirmPassword: string;
}
