import {Injectable} from '@nestjs/common'
import { Op } from "sequelize";
import { Account, UpdateAccount } from "src/account/interfaces/accounts.interface";
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

	async find(id: number): Promise<Account>{
        return await Accounts.findOne({
            attributes:['id', 'username', 'email', 'desc'],
            where: {id}
        }) as Account;
    }

	async findAll(id?: number): Promise<Account[]>{
		let where = {id: {[Op.ne]: id}};
		let attributes = ['id', 'username'];

		if(!id){
			attributes.push('desc');
			where = undefined;
		}

		return await Users.findAll({
			attributes,
			where
		}) as Account[];
	}

}
