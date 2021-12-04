require('dotenv').config();
import { CanActivate, ExecutionContext, Injectable } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { Observable } from "rxjs";

@Injectable()
export class JwtGuard implements CanActivate{
    constructor(private readonly jwtService: JwtService){}

    canActivate(
        context: ExecutionContext
    ): boolean | Promise<boolean> | Observable<boolean>{
        const req = context.switchToHttp().getRequest();

        try{
            this.jwtService.verify(req.headers.usertoken, {secret: process.env.TOKEN_SECRET});
            return true;
        } catch(e){
            return false;
        }
    }
}