import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { NotificationsService } from '../notifications/notifications.service';

@Injectable()
export class UsersService {
  constructor(
    private readonly prismaService: PrismaService,
    private readonly notificationService: NotificationsService,
  ) {}

  async create(user: { id: string; email: string; name: string }) {
    const sendNotification = await this.notificationService.sendEmail({
      to: user.email,
      name: user.name,
    });
    const userCreated = await this.prismaService.users.create({
      data: {
        id: user.id,
        email: user.email,
        name: user.name,
      },
    });
    await this.prismaService.notifications.create({
      data: {
        userId: userCreated.id,
        title: sendNotification.subject,
        message: sendNotification.html,
      },
    });
    return userCreated;
  }
}
