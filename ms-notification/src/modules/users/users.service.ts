import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UsersService {
  constructor(private readonly prismaService: PrismaService) {}

  async create(user: { id: string; email: string; name: string }) {
    return await this.prismaService.users.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
  }
}
