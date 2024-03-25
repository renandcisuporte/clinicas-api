import { Inject, Injectable } from '@nestjs/common';
import { UserRepository } from '../repositories/user.repository';
import { CreateUserDTO } from '../dtos/create-user.dto';
// import { User } from '../entities/user.entity';

@Injectable()
export class CreateUserUseCase {
  constructor(
    @Inject('UserRepository')
    private readonly userRepo: UserRepository,
  ) {}

  async execute(input: CreateUserDTO) {
    // const user = new User(input);
    await this.userRepo.createUser(input);
    return input;
  }
}
