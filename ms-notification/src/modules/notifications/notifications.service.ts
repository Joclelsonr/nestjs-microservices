import { Injectable } from '@nestjs/common';
import { MailerService } from '@nestjs-modules/mailer';
import { SendEmailDto } from './dto/send-email.dto';

@Injectable()
export class NotificationsService {
  constructor(private readonly mailerService: MailerService) {}

  async sendEmail(
    emailOptions: Pick<SendEmailDto, 'to' | 'name'>,
  ): Promise<SendEmailDto> {
    const options = {
      to: emailOptions.to,
      from: 'no-reply@email.com',
      subject: 'Welcome to application',
      text: 'Welcome',
      html: `Welcome to application <b>${emailOptions.name}</b>`,
    };
    try {
      await this.mailerService.sendMail({ ...options });
      return { ...options, name: emailOptions.name };
    } catch (error) {
      console.error('Error sending email:', error);
      throw new Error('Failed to send email');
    }
  }

  async sendEmailTest(): Promise<any> {
    return await this.mailerService.sendMail({
      to: 'jocleelson.159@hotmail.com',
      from: 'no-reply@email.com',
      subject: 'Test Email',
      text: 'Welcome',
      html: '<b>Welcome to application</b>',
    });
  }
}
