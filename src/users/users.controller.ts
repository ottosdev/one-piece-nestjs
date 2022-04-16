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
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { GetUser } from 'src/auth/user-decorator';
import { CreateUserDTO } from './dto/create-user.dto';
import { UpdateUserDTO } from './dto/update-user.dto';
import { UsersEntity } from './entity/users.entity';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private userService: UsersService) {}

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async index(@GetUser() user: UsersEntity): Promise<UsersEntity[]> {
    console.log(user);
    return this.userService.findAll();
  }

  @Post()
  async store(@Body() dto: CreateUserDTO): Promise<UsersEntity> {
    return this.userService.createUser(dto);
  }

  @Get(':id')
  async show(
    @Param('id', new ParseUUIDPipe()) id: string,
  ): Promise<UsersEntity> {
    return this.userService.findOneOrFail({ id });
  }

  @Put(':id')
  @HttpCode(HttpStatus.CREATED)
  async update(
    @Param('id', new ParseUUIDPipe()) id: string,
    @Body() dto: UpdateUserDTO,
  ): Promise<UsersEntity> {
    return this.userService.updateUser(id, dto);
  }

  @Delete(':id')
  @HttpCode(HttpStatus.NO_CONTENT)
  async destroy(@Param('id', new ParseUUIDPipe()) id: string): Promise<void> {
    return this.userService.deleteUser(id);
  }
}
