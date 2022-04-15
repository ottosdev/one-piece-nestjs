import {
  Body,
  Controller,
  Delete,
  Get,
  HttpCode,
  HttpStatus,
  Param,
  ParseUUIDPipe,
  Post,
  Put,
} from '@nestjs/common';
import { CreateUserDTO } from './dto/create-user.dto';
import { ShowUserDTO } from './dto/show-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersEntity } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @Get()
  async index(): Promise<UsersEntity[]> {
    return this.userService.findAll();
  }

  @Post()
  async store(@Body() dto: CreateUserDTO): Promise<UsersEntity> {
    return this.userService.store(dto);
  }

  @Get(':id')
  async show(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<UsersEntity> {
    return this.userService.findOneOrFail(id);
  }

  @Put(':id')
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateUserDTO,
  ): Promise<ShowUserDTO> {
    return this.userService.update(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.userService.destroy(id);
  }
}
