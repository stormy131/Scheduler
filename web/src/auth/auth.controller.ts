require('dotenv').config();
import { Body, Controller, Get, Post, Redirect } from '@nestjs/common';
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
}
