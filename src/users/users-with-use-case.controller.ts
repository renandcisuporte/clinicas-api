import { Body, Controller, Inject, Post } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { CreateUserDTO } from './dtos/create-user.dto';

@Controller('users')
export class UsersWithUseCaseController {
  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Post()
  createUser(@Body() input: CreateUserDTO) {
    return this.createUserUseCase.execute(input);
  }
}
