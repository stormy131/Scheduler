import { Module } from "@nestjs/common";
import { AccountsController } from "./accounts.controller";
import { AccountService } from "./accounts.service";

@Module({
    imports: [],
    controllers: [AccountsController],
    providers: [AccountService]
})
export class AccountsModule{}