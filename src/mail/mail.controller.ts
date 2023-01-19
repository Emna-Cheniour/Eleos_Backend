/* eslint-disable prettier/prettier */
import { Body, Controller, Post } from '@nestjs/common';
import { Get } from '@nestjs/common/decorators/http/request-mapping.decorator';
import { MailService } from './mail.service';

@Controller('eleos/email')
export class MailController {
  constructor(private readonly mailService: MailService) {}

  @Get('/')
  async getMail(){
    console.log("hay");
  }

  @Post('/')
  async sendEmail(@Body() message : any) {
    return await this.mailService.sendMail(message);
  }
}
