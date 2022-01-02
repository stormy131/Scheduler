import { Body, Controller, Delete, Patch, Req, UseGuards, UseInterceptors } from "@nestjs/common";
import { JwtGuard } from "src/appGuards/jwt.guard";
import { JwtInterceptor } from "src/appInterceptors/jwt.interceptor";
import { AccountService } from "./accounts.service";
import { UpdateAccount } from "./interface/account.interface";
import { Request } from 'express';

@Controller('account')
@UseGuards(JwtGuard)
@UseInterceptors(JwtInterceptor)
export class AccountsController{
    constructor(private readonly accountsService: AccountService){}

    @Patch()
    async updateAccount(@Req() req: Request, @Body() body: UpdateAccount){
        return await this.accountsService.updateAccount(req, body);
    }

    @Delete()
    async deleteAccount(@Req() req: Request){
        return await this.accountsService.deleteAccount(req);
    }
}