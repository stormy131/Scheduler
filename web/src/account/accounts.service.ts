import { Injectable } from "@nestjs/common";
import { Account, UpdateAccount, AccountInList } from "./interfaces/accounts.interface";
import { AccountsRepo } from "../database/repository/accounts.repository";

@Injectable()
export class AccountService {
    constructor(private readonly accountsRepo: AccountsRepo){}

    async getAccount(req): Promise<Account>{
        return await this.accountsRepo.find(req.body.user.id);
    }

    async getAllAccounts(req): Promise<AccountInList[]>{
        const res = await this.accountsRepo.findAll(req.body.user.id);

        return res.map(acc => {
            return {id: acc.id, username: acc.username};
        });
    }

    async deleteAccount(req): Promise<boolean>{
        return await this.accountsRepo.delete(req.body.user.id);
    }

    async updateAccount(req, newValues: UpdateAccount): Promise<boolean>{
        return this.accountsRepo.update(req.body.user.id, newValues);
    }
}
