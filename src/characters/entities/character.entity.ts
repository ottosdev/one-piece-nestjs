import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { HakiTypesEnum } from '../enum/hakitypes.enum';
import { DescriptionEntity } from './description.entity';

@Entity({ name: 'tb_characters' })
export class CharacterEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({name: "name"})
  name: string;

  @OneToOne((_type) => DescriptionEntity, item => item.character, {
    cascade: true,
    onDelete: 'CASCADE',
    eager: true,
  })
  description_character: DescriptionEntity;

  @Column({
    type: "enum",
    array: true,
    enum: HakiTypesEnum,
    name: "haki_types"
  })
  hakiType: HakiTypesEnum[];

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
