import { Controller, Get, Post } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService){}

    // @Get()
    // getLoginPage(){
    //     return '123';
    // }

    @Post()
    async postLogin(){
        
    }

    @Post()
    async postReg(){

    }
}
