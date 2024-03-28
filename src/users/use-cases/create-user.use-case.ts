import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';
import { hash } from 'bcrypt';

@Injectable()
export class CreateUserUseCase {
  @Inject('UserRepository')
  private readonly userRepo: UserRepository;

  async execute(input: CreateUserDTO) {
    const isMacth = await this.userRepo.alreadyExists(input.email);
    if (isMacth) {
      throw new ForbiddenException({ message: 'user already exists' });
    }

    const password = await hash(input.password, 10);

    return await this.userRepo.createUser({ ...input, password });
  }
}
