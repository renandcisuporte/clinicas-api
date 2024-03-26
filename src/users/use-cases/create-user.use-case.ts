import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { Bcrypt } from 'src/utils/shared/bcrypt.shared';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,

    @Inject('Bcrypt')
    private readonly bcrypt: Bcrypt,
  ) {}

  async execute(input: CreateUserDTO) {
    const isMacth = await this.userRepo.alreadyExists(input.email);
    if (isMacth) {
      throw new ForbiddenException({ message: 'user already exists' });
    }

    const password = await this.bcrypt.hash(input.password);

    return await this.userRepo.createUser({ ...input, password });
  }
}
