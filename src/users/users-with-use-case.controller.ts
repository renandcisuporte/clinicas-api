import { Body, Controller, Post } from '@nestjs/common';
import { ApiOkResponse } from '@nestjs/swagger';

import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';

@Controller('/api/v1/users')
export class UsersWithUseCaseController {
  constructor(private readonly createUserUseCase: CreateUserUseCase) {}

  @Post()
  @ApiOkResponse({ type: UserEntity })
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.createUserUseCase.execute(createUserDTO);
  }
}
