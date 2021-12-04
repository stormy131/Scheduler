import { Module } from "@nestjs/common";
import { AccountsController } from "./accounts.controller";
import { AccountService } from "./accounts.service";
import { JwtModule } from '@nestjs/jwt';
import { AccountsRepo } from "../database/repository/accounts.repository";
import { TokensRepo } from "../database/repository/tokens.repository";

@Module({
    imports: [
        JwtModule.register({
            secret: process.env.TOKEN_SECRET
        })
    ],
    controllers: [AccountsController],
    providers: [AccountService, AccountsRepo, TokensRepo]
})
export class AccountsModule{}