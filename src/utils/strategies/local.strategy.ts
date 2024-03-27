import {
  HttpStatus,
  Inject,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { AuthRepository } from 'src/auth/repositories/auth.repository';
import { Strategy } from 'passport-local';

@Injectable()
export class LocalStrategy extends PassportStrategy(Strategy, 'local') {
  @Inject('AuthRepository')
  private readonly authRepo: AuthRepository;

  constructor() {
    super({
      usernameField: 'email',
      passwordField: 'password',
    });
  }

  async validate(email: string, password: string) {
    const user = await this.authRepo.validateAuthUser(email, password);
    if (!user)
      throw new UnauthorizedException({
        message: 'invalid email or password',
        statusCode: HttpStatus.UNAUTHORIZED,
      });

    return user;
  }
}
