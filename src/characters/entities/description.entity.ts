import {
  Column,
  CreateDateColumn,
  DeleteDateColumn,
  Entity,
  JoinColumn,
  OneToOne,
  PrimaryGeneratedColumn,
  UpdateDateColumn,
} from 'typeorm';
import { RoleEnum } from '../enum/role.enum';
import { CharacterEntity } from './character.entity';

@Entity({ name: 'tb_description' })
export class DescriptionEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;
  
  @Column()
  age: string;

  @Column()
  born: string;

  @Column({ name: 'has_haki' })
  hasHaki: boolean;

  @OneToOne((_type) => CharacterEntity)
  @JoinColumn({
    name: 'character_id',
  })
  character: CharacterEntity;

  @Column({name: "character_id"})
  character_id: string;

  @Column({
    type: "enum",
    enum: RoleEnum
  })
  role: RoleEnum

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @DeleteDateColumn({ name: 'deleted_at' })
  deletedAt: Date;
}
