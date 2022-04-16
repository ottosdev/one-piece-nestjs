import {
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { DescriptionEntity } from './description.entity';

@Entity({ name: 'tb_characters' })
export class CharacterEntity {
  @PrimaryGeneratedColumn('uuid')
  character_id: string;

  @OneToOne((_type) => DescriptionEntity, item => item.character, {
    cascade: true,
    onDelete: 'CASCADE',
    primary: true,
  })
  description_character: DescriptionEntity;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
