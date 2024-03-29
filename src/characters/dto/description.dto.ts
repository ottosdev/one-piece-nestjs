import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { RoleEnum } from '../enum/role.enum';

export class DescriptionDTO {

  @IsNotEmpty()
  age: string;
  @IsNotEmpty()
  born: string;
  @IsNotEmpty()
  hasHaki: boolean;
}
