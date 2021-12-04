import { Injectable } from "@nestjs/common";
import { TokenInfo, Tokens } from "../models/tokens";

@Injectable()
export class TokensRepo{
    async create(token: string){
        await Tokens.create({token});
    }

    async findOne(token: string): Promise<TokenInfo>{
        return await Tokens.findOne({where: {token}});
    }
}