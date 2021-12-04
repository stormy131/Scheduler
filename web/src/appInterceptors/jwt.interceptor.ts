import { CallHandler, ExecutionContext, Injectable, NestInterceptor } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { Observable } from "rxjs";

@Injectable()
export class JwtInterceptor implements NestInterceptor{
    constructor(private readonly jwtService : JwtService){}

    intercept(context: ExecutionContext, next: CallHandler): Observable<any>{
        const req = context.switchToHttp().getRequest();

        const user = this.jwtService.decode(req.headers.usertoken.toString());
        req.body.user = {
            id: user['id']
        };

        return next.handle();
    }
}