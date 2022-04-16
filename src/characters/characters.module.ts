import { Module } from '@nestjs/common';
import { CharactersService } from './characters.service';
import { CharactersController } from './characters.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CharactersRepository } from './repository/characters.repository';
import { DescriptionRepository } from './repository/description.repository';

@Module({
  imports:[TypeOrmModule.forFeature([CharactersRepository,DescriptionRepository])],
  controllers: [CharactersController],
  providers: [CharactersService]
})
export class CharactersModule {}
