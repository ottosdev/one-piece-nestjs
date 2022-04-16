import { Injectable, NotFoundException } from '@nestjs/common';
import { FindConditions, FindOneOptions, ObjectID } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersEntity } from './entity/users.entity';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(private userRepository: UsersRepository) {}

  async findAll() {
    try {
      const users: UsersEntity[] = await this.userRepository.find({
        select: ['id', 'username', 'firstName', 'lastName', 'email'],
      });

      return users;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOneOrFail(
    conditions: FindConditions<UsersEntity>,
    options?: FindOneOptions<UsersEntity>,
  ) {
    try {
      return await this.userRepository.findOneOrFail(conditions, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async createUser(dto: CreateUserDTO) {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }

  async updateUser(id: string, user: UpdateUserDTO) {
    const updateUser = await this.findOneOrFail({ id });
    this.userRepository.merge(updateUser, user);
    return this.userRepository.save(updateUser);
  }

  async deleteUser(id: string) {
    await this.findOneOrFail({ id });
    this.userRepository.softDelete(id);
  }
}
