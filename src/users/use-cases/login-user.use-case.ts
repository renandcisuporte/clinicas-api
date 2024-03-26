import {
  Inject,
  Injectable,
  NotFoundException,
  UnauthorizedException,
} from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { JwtService } from 'src/utils/shared/jwt.shared';
import { Bcrypt } from 'src/utils/shared/bcrypt.shared';

@Injectable()
export class LoginUserUseCase {
  @Inject('UserRepository')
  private readonly userRepo: UserRepository;

  @Inject('JwtService')
  private readonly jwtService: JwtService;

  @Inject('Bcrypt')
  private readonly bcrypt: Bcrypt;

  async execute(input: CreateUserDTO) {
    const user = await this.userRepo.loginUser(input.email);
    if (!user?.id) {
      throw new NotFoundException({
        message: 'user already exists',
      });
    }

    const hash = await this.bcrypt.compare(input.password, user.password);
    if (!hash) {
      throw new UnauthorizedException({
        message: 'password not compared',
      });
    }

    const payload = { sub: user.id, email: user.email };

    return {
      access_token: await this.jwtService.createToken(
        payload,
        '4ad54dsa#@#@',
        '1d',
      ),
    };
  }
}
