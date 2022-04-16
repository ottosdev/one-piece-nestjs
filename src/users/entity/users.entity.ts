import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  BeforeInsert,
} from 'typeorm';
import { hashSync } from 'bcrypt';
@Entity({ name: 'tb_users' })
export class UsersEntity {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column({ name: 'first_name' })
  firstName: string;

  @Column({ name: 'last_name' })
  lastName: string;
  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn({ name: 'created_at' })
  createdAt: Date;

  @UpdateDateColumn({ name: 'updated_at' })
  updateAt: Date;

  @DeleteDateColumn({ name: 'deketed_at' })
  deletedAt: Date;

  @BeforeInsert()
  hashPassword() {
    this.password = hashSync(this.password, 10);
  }
}
