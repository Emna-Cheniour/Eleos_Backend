import { MailerService } from '@nestjs-modules/mailer';
import { Injectable } from '@nestjs/common';

@Injectable()
export class MailService {
  constructor(private mailerService: MailerService) {}

  async sendMail(message: any) {
    console.log(message.name);
    await this.mailerService.sendMail({
      to: 'emna.cheniour@insat.ucar.tn',
      subject: message.subject,
      template: '/email',
      context: {
        name: message.name,
        message: message.message,
      },
    });
  }
}
