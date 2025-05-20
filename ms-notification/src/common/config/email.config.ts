import { registerAs } from '@nestjs/config';
import { MailerOptions } from '@nestjs-modules/mailer';
import { EMAIL_MODULE_CONFIG } from '../constants';

export const emailConfig = registerAs(
  EMAIL_MODULE_CONFIG,
  (): MailerOptions => ({
    transport: {
      host: process.env.MAIL_HOST ?? 'smtp.mailtrap.io',
      port: process.env.MAIL_PORT ? Number(process.env.MAIL_PORT) : 587,
      secure: process.env.MAIL_SECURE === 'true',
      auth: {
        user: process.env.MAIL_USER ?? 'user',
        pass: process.env.MAIL_PASS ?? 'pass',
      },
    },
    defaults: {
      from: process.env.MAIL_FROM,
    },
  }),
);
