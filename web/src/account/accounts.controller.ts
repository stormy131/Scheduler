import { Controller, Delete, Patch } from "@nestjs/common";
import { AccountService } from "./accounts.service";

@Controller('account')
export class AccountsController{
    constructor(private readonly accounstService: AccountService){}

    @Patch()
    async updateAccount(){
        
    }

    @Delete()
    async deleteAccount(){

    }
}