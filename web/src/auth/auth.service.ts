import { Injectable } from '@nestjs/common';
import { LoginInterface } from './interfaces/login.interface';
import { RegistrationInterface } from './interfaces/register.interface';
import { AccountsRepo } from '../database/repository/accounts.repository';
import { TokensRepo } from '../database/repository/tokens.repository';
import { JwtService } from '@nestjs/jwt';
import tryWrapper from "../utils/wrapper";

@Injectable()
export class AuthService {
  constructor(
    private readonly accountRepo: AccountsRepo,
    private readonly tokenRepo: TokensRepo,
    private readonly jwtService: JwtService,
  ) {}

  async postLogin(loginData: LoginInterface): Promise<any> {
    const res = await this.accountRepo.find(loginData);

    if (!res) return false;

    const token = this.jwtService.sign(
      { name: res.name, id: res.id },
      { expiresIn: '1h' },
    );
    const refToken = this.jwtService.sign({ username: res.name, id: res.id });

    const user = {
      id: res.id,
      email: res.email,
      name: res.name,
    };

    await this.tokenRepo.create(refToken);
    return {token, refToken, user,};
  }

  async postReg(newAccount: RegistrationInterface): Promise<boolean> {
    return await tryWrapper(this.accountRepo.create, newAccount);
  }
}
