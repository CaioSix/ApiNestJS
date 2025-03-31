import {
  Body,
  Controller,
  Post,
  Get,
  Param,
  Put,
  Patch,
  Delete,
  ParseIntPipe,
} from '@nestjs/common';
import { CreateUserDTO } from './DTO/create-user.dto';
import { UpdateUserDTO } from './DTO/update-put-user.dto';
import { UpdatePathUserDTO } from './DTO/update-patch-user.dto';

@Controller('users')
export class UserController {
  @Post()
  async create(@Body() { email, name, password }: CreateUserDTO) {
    return { name, email, password };
  }

  @Get()
  async read() {
    return { users: [] };
  }

  @Get(':id')
  async readOne(@Param('id', ParseIntPipe) id: number) {
    return { user: {}, id };
  }

  @Put(':id')
  async update(@Body() { email, name, password }: UpdateUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'put',
      email, name, password ,
      id,
    };
  }

  @Patch()
  async updateParcial(@Body() { email, name, password }: UpdatePathUserDTO, @Param('id', ParseIntPipe) id: number) {
    return {
      method: 'patch',
      email, name, password ,
      id,
    };
  }

  @Delete(':id')
  async delete(@Param('id', ParseIntPipe) id: number) {
    return {
      id,
    };
  }
}
