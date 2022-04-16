import { IsEnum, IsNotEmpty, IsOptional } from 'class-validator';
import { DescriptionDTO } from './description.dto';

export class CreateCharacterDto {

  @IsNotEmpty()
  description_character: DescriptionDTO;
}
