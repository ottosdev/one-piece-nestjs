import { Injectable } from '@nestjs/common';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { CharacterEntity } from './entities/character.entity';
import { CharactersRepository } from './repository/characters.repository';
import { DescriptionRepository } from './repository/description.repository';

@Injectable()
export class CharactersService {
  constructor(
    private readonly characterRepository: CharactersRepository,
    private readonly des: DescriptionRepository,
  ) {}

  async create(
    createCharacterDto: CreateCharacterDto,
  ): Promise<CharacterEntity> {
   
    const character = this.characterRepository.create(createCharacterDto)

    return this.characterRepository.save(character);
  }

  findAll() {
    return `This action returns all characters`;
  }

  findOne(id: number) {
    return `This action returns a #${id} character`;
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
