import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { ApiDocGenericPost } from 'src/common/decorators/docs/api-doc-post-generic.decorator';
import { ApiDocGenericGetAll } from 'src/common/decorators/docs/api-doc-generic-get-all.decorator';
import { ApiDocGenericGetOne } from 'src/common/decorators/docs/api-doc-generic-get-one.decorator';
import { ApiDocGenericPatch } from 'src/common/decorators/docs/api-doc-generic-patch.decorator';
import { ApiDocGenericDelete } from 'src/common/decorators/docs/api-doc-generic-delete.decorator';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  @ApiDocGenericPost('Create user', CreateUserDto)
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @ApiDocGenericGetAll('Get all users', CreateUserDto)
  findAll() {
    return this.usersService.findAll();
  }

  @Get(':id')
  @ApiDocGenericGetOne('Get user by ID', CreateUserDto)
  findOne(@Param('id') id: string) {
    return this.usersService.findOne(id);
  }

  @Patch(':id')
  @ApiDocGenericPatch('Update user', UpdateUserDto)
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(id, updateUserDto);
  }

  @Delete(':id')
  @ApiDocGenericDelete('Delete user')
  remove(@Param('id') id: string) {
    return this.usersService.remove(id);
  }
}
