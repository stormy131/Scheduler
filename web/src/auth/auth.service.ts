import { Injectable } from '@nestjs/common';
import { LoginInterface } from './interfaces/login.interface';
import { RegistrationInterface } from './interfaces/register.interface';
import { AccountsRepo } from '../database/repository/accounts.repository';
import { TokensRepo } from '../database/repository/tokens.repository';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    private readonly accountRepo: AccountsRepo,
    private readonly tokenRepo: TokensRepo,
    private readonly jwtService: JwtService,
  ) {}

  async postLogin(loginData: LoginInterface): Promise<any> {
    const res = await this.accountRepo.find(loginData);

    if (!res) return 'Invalid user data';

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

    return {
      token,
      refToken,
      user,
    };
  }

  async postReg(newAccount: RegistrationInterface): Promise<string> {
    const alreadyExists = await this.accountRepo.check(newAccount);

    if (alreadyExists) {
      return 'Provied email or username is already in use';
    }

    await this.accountRepo.create(newAccount);
    return 'created, now go to login';
  }

  async refreshToken(oldToken: string, token: string) {
    const res = await this.tokenRepo.findOne(token);
    const data = this.jwtService.decode(oldToken);

    if (res) return this.jwtService.sign(data, { expiresIn: '1h' });
  }

  async googleLogin(
    request,
  ): Promise<{ message: string; user: { email: string } }> {
    const { user } = request;

    if (!user)
      return {
        message: 'no google user',
        user: {
          email: '',
        },
      };

    user.name = user.username;
    delete user.username;
    user.password = '';

    await this.accountRepo.findOrCreate(user);
    return {
      message: 'User from google',
      user,
    };
  }
}
