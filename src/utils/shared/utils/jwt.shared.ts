import { JwtService as JWT } from '@nestjs/jwt';
import { Injectable } from '@nestjs/common';
import { JwtService } from '../jwt.shared';

@Injectable()
export class JwtServiceShared implements JwtService {
  constructor(private readonly jwtService: JWT) {}

  async validate(token: string): Promise<any> {
    const decode = await this.jwtService.verifyAsync(token);
    return decode;
  }

  generate(payload: any) {
    return { token: this.jwtService.sign(payload) };
  }
}
