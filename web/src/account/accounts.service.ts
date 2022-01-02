import { Injectable } from "@nestjs/common";
import { UpdateAccount } from "src/account/interface/account.interface";
import { AccountsRepo } from "../database/repository/accounts.repository";
import tryWrapper from "../utils/wrapper";

@Injectable()
export class AccountService {
    constructor(private readonly accountsRepo: AccountsRepo){}

    async deleteAccount(req) {
        return await tryWrapper(this.accountsRepo.delete, req.body.user.id);
    }

    async updateAccount(req, newValues: UpdateAccount) {
        return await tryWrapper(this.accountsRepo.update, req.body.user.id, newValues);
    }
}
