require('dotenv').config();
import { Body, Controller, Get, Post, Redirect, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistrationDto } from './dto/registration.dto';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    @Get()
    @Redirect(`localhost:${process.env.PORT}/login.html`)
    getLoginPage(){
    }

    @Post()
    async postLogin(@Body() data: LoginDto){
        return await this.authService.postLogin(data);
    }

    @Post('reg')
    async postReg(@Body() data: RegistrationDto){
        return await this.authService.postReg(data);
    }

    @Get('google')
    @UseGuards(AuthGuard('google'))
    async googleAuthRedirect(@Req() req: Request){
        return await this.authService.googleLogin(req);
    }
}
