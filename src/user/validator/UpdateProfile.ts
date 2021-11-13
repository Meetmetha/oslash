import {
  IsOptional,
  IsString,
  MaxLength,
  MinLength,
  IsAlpha,
  IsUnique
} from '@libs/core/validator';

export class UpdateProfile {

  
  @IsString()
  @IsOptional()
  @IsAlpha()
  @MaxLength(255)
  @MinLength(4)
  @IsUnique({ collection: 'users', column: 'username', caseInsensitive: true })
  username: string;
}
