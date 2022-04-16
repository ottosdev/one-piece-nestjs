import { IsNotEmpty, IsOptional } from 'class-validator';
import { HakiTypesEnum } from '../enum/hakitypes.enum';
import { DescriptionDTO } from './description.dto';

export class CreateCharacterDto {

  
  @IsNotEmpty()
  name: string;
  
  @IsNotEmpty()
  description_character: DescriptionDTO;


  @IsNotEmpty()
  @IsOptional()
  hakiType: HakiTypesEnum[];
}
