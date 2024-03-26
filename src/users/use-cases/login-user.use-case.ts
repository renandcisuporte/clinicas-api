import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { JwtService } from 'src/utils/shared/jwt.shared';

@Injectable()
export class LoginUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
    @Inject('JwtService')
    private readonly jwtService: JwtService,
  ) {}

  async execute(input: CreateUserDTO) {
    const user = await this.userRepo.loginUser(input.email);
    if (!user?.id) {
      throw new ForbiddenException({ message: 'user already exists' });
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
