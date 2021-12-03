import {Injectable} from '@nestjs/common'
import { Account, UpdateAccount } from "src/account/interface/account.interface";
import { RegistrationInterface } from "src/auth/interfaces/register.interface";
import { Accounts } from "../models/accounts";

@Injectable()
export class AccountsRepo {

	async create(newUser: RegistrationInterface) {
		await Accounts.create(newUser);
	}

	async update(id: number, newValues: UpdateAccount): Promise<boolean> {
		await Accounts.update(newValues, {where: {id}});
		return true;
	}

	async delete(id: number): Promise<boolean> {
		await Accounts.destroy({where: {id}});
		return true;
	}

}
