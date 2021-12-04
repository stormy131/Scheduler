import { Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  @UseGuards(AuthGuard('google'))
  getHello() {
    
  }

  @Post()
  async refreshToken(@Req() req: Request): Promise<string>{
    return await this.appService.refresh(req.headers.reftoken as string, req.headers.oldtoken as string);
  }
}
