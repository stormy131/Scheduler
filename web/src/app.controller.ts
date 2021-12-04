import { Controller, Get, Post, Req } from '@nestjs/common';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Post()
  async refreshToken(@Req() req: Request): Promise<string>{
    return await this.appService.refresh(req.headers.reftoken as string, req.headers.oldtoken as string);
  }
}
