import {
  HttpException,
  HttpStatus,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { ExeptionsMessage } from 'src/utils/messages';
import { CreateCharacterDto } from './dto/create-character.dto';
import { UpdateCharacterDto } from './dto/update-character.dto';
import { CharacterEntity } from './entities/character.entity';
import { CharactersRepository } from './repository/characters.repository';
import { DescriptionRepository } from './repository/description.repository';

@Injectable()
export class CharactersService {
  constructor(
    private readonly characterRepository: CharactersRepository,
    private readonly descriptionRepo: DescriptionRepository,
  ) {}

  async create(
    createCharacterDto: CreateCharacterDto,
  ): Promise<CharacterEntity> {
    const { name } = createCharacterDto;
    const getCharacter = await this.characterRepository.findOne({
      where: { name },
    });

    if (getCharacter) {
      throw new HttpException(
        'Character already exists',
        HttpStatus.BAD_REQUEST,
      );
    }

    const character = this.characterRepository.create(createCharacterDto);

    return this.characterRepository.save(character);
  }

  async findAll() {
    try {
      const characters = await this.characterRepository.find();

      return characters;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOne(id: string): Promise<CharacterEntity> {
    try {
      const character = await this.characterRepository.findOne(id);

      if (!character) {
        throw new HttpException('None', HttpStatus.NOT_FOUND);
      }
      return character;
    } catch (error) {
      if (error instanceof HttpException) {
        throw new HttpException({ message: error.message }, error.getStatus());
      }

      throw new HttpException(
        'Something wrong',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  update(id: number, updateCharacterDto: UpdateCharacterDto) {
    return `This action updates a #${id} character`;
  }

  remove(id: number) {
    return `This action removes a #${id} character`;
  }
}
