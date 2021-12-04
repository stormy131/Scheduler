import { Module } from "@nestjs/common";
import { AccountsRepo } from "src/database/repository/accounts.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";
import { JwtModule } from '@nestjs/jwt';
import { TokensRepo } from "src/database/repository/tokens.repository";
import { GoogleStrategy } from "./auth.strategy";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.TOKEN_SECRET
        })
    ],
    controllers: [AuthController],
    providers: [AuthService, AccountsRepo, TokensRepo, GoogleStrategy]
})
export class AuthModule{};