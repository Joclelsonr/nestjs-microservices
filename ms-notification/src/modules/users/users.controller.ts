import { Controller } from '@nestjs/common';
import { MessagePattern } from '@nestjs/microservices';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @MessagePattern('users-user-created')
  async createUser(data: { id: string; email: string; name: string }) {
    console.log('usuário criado: ', data);
    return await this.usersService.create(data);
  }
}
