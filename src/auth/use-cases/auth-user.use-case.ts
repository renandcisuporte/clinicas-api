import { Inject, Injectable } from '@nestjs/common';
import { JwtService } from 'src/utils/shared/jwt.shared';

@Injectable()
export class AuthUserUseCase {
  @Inject('JwtService')
  private readonly jwtService: JwtService;

  execute(payload: { id: string; email: string }) {
    return this.jwtService.generate({
      sub: payload.id,
      email: payload.email,
    });
  }
}
