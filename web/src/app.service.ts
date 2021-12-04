import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { Request } from 'express';
import { TokensRepo } from './database/repository/tokens.repository';

@Injectable()
export class AppService {
  constructor(
    private readonly tokensRepo: TokensRepo,
    private readonly jwtService: JwtService
  ){}

  getHello(): string {
    return 'Hello World!';
  }

  async refresh(refToken: string, oldToken: string): Promise<string>{
    const res = await this.tokensRepo.findOne(refToken);
    if(!res) return 'Forbidden resource';

    const data = this.jwtService.decode(oldToken);
    const newToken = this.jwtService.sign(data, {expiresIn: '1h'});
    return newToken;
  }
}
