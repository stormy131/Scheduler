import {Injectable} from '@nestjs/common'
import { Account, UpdateAccount } from "src/account/interface/account.interface";
import { RegistrationInterface } from "src/auth/interfaces/register.interface";
import { LoginInterface } from 'src/auth/interfaces/login.interface';
import { Accounts } from "../models/accounts";

@Injectable()
export class AccountsRepo {

	async create(newAccount: RegistrationInterface) {
		await Accounts.create(newAccount);
	}

	async update(id: number, newValues: UpdateAccount): Promise<boolean> {
		await Accounts.update(newValues, {where: {id}});
		return true;
	}

	async delete(id: number): Promise<boolean> {
		await Accounts.destroy({where: {id}});
		return true;
	}

	async find(account: LoginInterface): Promise<Account> {
        return await Accounts.findOne({where: {email: account.email, password: account.password}}) as Account;
	}

	async check(account: RegistrationInterface): Promise<Account> {
		return await Accounts.findOne({where: {email: account.email}}) as Account;
	}

	async findOrCreate(account: UpdateAccount): Promise<void>{
		await Accounts.findOrCreate({where: account});
	}

}
