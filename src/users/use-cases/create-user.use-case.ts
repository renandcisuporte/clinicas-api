import { Inject, Injectable } from '@nestjs/common';
import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserRepository } from '../repositories/user.repository';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(input: CreateUserDTO) {
    return await this.userRepo.createUser(input);
  }
}
