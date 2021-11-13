import {
  IsString,
  MaxLength,
  MinLength,
} from '@libs/core/validator';

export class DeleteProfile {

  
  @IsString()
  @MinLength(6)
  @MaxLength(255)
  password: string;
}
