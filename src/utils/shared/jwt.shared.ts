import { JwtService as JWT } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';

export abstract class JwtService {
  abstract checkToken(token: string): Promise<any>;
  abstract createToken(
    payload: any,
    secret: string,
    expiresIn: string,
  ): Promise<string>;
}

@Injectable()
export class JwtTokenShared implements JwtService {
  constructor(private readonly jwtService: JWT) {}

  async checkToken(token: string): Promise<any> {
    const decode = await this.jwtService.verifyAsync(token);
    return decode;
  }

  async createToken(
    payload: any,
    secret: string,
    expiresIn: string,
  ): Promise<string> {
    return await this.jwtService.signAsync(payload, {
      secret: secret,
      expiresIn: expiresIn,
    });
  }
}
