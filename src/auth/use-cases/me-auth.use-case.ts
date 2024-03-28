import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class MeAuthUseCase {
  constructor(private readonly jwtService: JwtService) {}

  async execute(userDto: any): Promise<any> {
    return { ...userDto };
  }
}
