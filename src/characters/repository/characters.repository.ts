import { EntityRepository, Repository } from "typeorm"
import { CharacterEntity } from "../entities/character.entity"

@EntityRepository(CharacterEntity)
export class CharactersRepository extends Repository<CharacterEntity> {}