import { JwtService } from '@nestjs/jwt';
import { AuthEntity } from 'src/auth/entities/auth.entity';

export class LoginAuthUseCase {
  constructor(private readonly jwtService: JwtService) {}

  async execute(user: any): Promise<AuthEntity> {
    const payload = { sub: user.id, email: user.email };
    return { access_token: this.jwtService.sign(payload) };
  }
}
