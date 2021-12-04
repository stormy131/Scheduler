import { Module } from "@nestjs/common";
import { ServeStaticModule } from "@nestjs/serve-static";
import { join } from "path";
import { AccountsRepo } from "src/database/repository/accounts.repository";
import { AuthController } from "./auth.controller";
import { AuthService } from "./auth.service";

@Module({
    imports: [],
    controllers: [AuthController],
    providers: [AuthService, AccountsRepo]
})
export class AuthModule{};