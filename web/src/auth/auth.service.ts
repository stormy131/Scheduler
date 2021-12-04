import { Injectable } from "@nestjs/common";
import { LoginInterface } from './interfaces/login.interface';
import { RegistrationInterface } from './interfaces/register.interface';
import { AccountsRepo } from '../database/repository/accounts.repository';

@Injectable()
export class AuthService {
    constructor(
        private readonly accountRepo: AccountsRepo
    ){}

    async postLogin(loginData: LoginInterface): Promise<Number>{
        const res = await this.accountRepo.find(loginData);
        return res.id;
    }

    async postReg(newAccount: RegistrationInterface): Promise<string>{
        const alreadyExists = await this.accountRepo.check(newAccount);

        if(alreadyExists){
            return 'Provied email or username is already in use';
        }

        await this.accountRepo.create(newAccount);
        return 'created, now go to login';
    }
}
