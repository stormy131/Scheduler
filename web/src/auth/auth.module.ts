import { Module } from "@nestjs/common";
import { AccountsRepo } from "../database/repository/accounts.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
import { TokensRepo } from "../database/repository/tokens.repository";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.TOKEN_SECRET
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, AccountsRepo, TokensRepo]
})
export class AuthModule{};