import { ForbiddenException, Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(input: CreateUserDTO) {
    const isMacth = this.userRepo.isMatchUser(input.email);
    if (isMacth) {
      throw new ForbiddenException({ message: 'user already exists' });
    }
    return await this.userRepo.createUser(input);
  }
}
