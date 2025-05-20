import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { NotificationsModule } from './modules/notifications/notifications.module';
import { PubsubModule } from './modules/pubsub/pubsub.module';
import { UsersModule } from './modules/users/users.module';
import { PrismaModule } from './modules/prisma/prisma.module';
import { emailConfig } from './common/config/email.config';

@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true, load: [emailConfig] }),
    NotificationsModule,
    PubsubModule,
    UsersModule,
    PrismaModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
