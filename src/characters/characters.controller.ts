import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { CharacterEntity } from './entities/character.entity';

@Controller('characters')
export class CharactersController {
  constructor(private readonly charactersService: CharactersService) {}

  @Post()
  async create(
    @Body() createCharacterDto: CreateCharacterDto,
  ): Promise<CharacterEntity> {
    return this.charactersService.create(createCharacterDto);
  }

  @Get()
  async findAll(): Promise<CharacterEntity[]> {
    return this.charactersService.findAll();
  }

  @Get(':id')
  async findOne(@Param('id') id: string): Promise<CharacterEntity> {
    return this.charactersService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateCharacterDto: UpdateCharacterDto,
  ) {
    return this.charactersService.update(+id, updateCharacterDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.charactersService.remove(+id);
  }
}
