import { Module } from '@nestjs/common';
import { ConfigModule, ConfigType } from '@nestjs/config';
import { NotificationsController } from './notifications.controller';
import { NotificationsService } from './notifications.service';
import { emailConfig } from 'src/common/config/email.config';
import { MailerModule } from '@nestjs-modules/mailer';

@Module({
  imports: [
    ConfigModule.forFeature(emailConfig),
    MailerModule.forRootAsync({
      inject: [emailConfig.KEY],
      useFactory: (config: ConfigType<typeof emailConfig>) => config,
    }),
  ],
  controllers: [NotificationsController],
  providers: [NotificationsService],
  exports: [NotificationsService],
})
export class NotificationsModule {}
