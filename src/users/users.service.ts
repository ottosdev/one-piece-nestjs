import { Injectable, NotFoundException } from '@nestjs/common';
import { FindOneOptions, ObjectID } from 'typeorm';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersEntity } from './entity/users.entity';
import { UsersRepository } from './repository/users.repository';

@Injectable()
export class UsersService {
  constructor(
    private userRepository: UsersRepository,
  ) {}

  async findAll() {
    try {
      const users: UsersEntity[] = await this.userRepository.find({
        select: ['id', 'firstName', 'lastName', 'email'],
      });

      return users;
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async findOneOrFail(
    id?: string | number | Date | ObjectID,
    options?: FindOneOptions<UsersEntity>,
  ) {
    try {
      return await this.userRepository.findOneOrFail(id, options);
    } catch (error) {
      throw new NotFoundException(error.message);
    }
  }

  async store(dto: CreateUserDTO) {
    const user = this.userRepository.create(dto);
    return this.userRepository.save(user);
  }

  async update(id: string, user: UpdateUserDTO) {
    const updateUser = await this.findOneOrFail(id);
    this.userRepository.merge(updateUser, user);
    return this.userRepository.save(updateUser);
  }

  async destroy(id: string) {
    await this.findOneOrFail(id);
    this.userRepository.softDelete(id);
  }
}
