import { Body, Controller, Inject, Post, UseFilters } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { CreateUserDTO } from './dtos/create-user.dto';
import { UserEntity } from './entities/user.entity';
import { ApiOkResponse } from '@nestjs/swagger';
import { LoginUserUseCase } from './use-cases/login-user.use-case';

@Controller('users')
export class UsersWithUseCaseController {
  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Inject(LoginUserUseCase)
  private readonly loginUserUseCase: LoginUserUseCase;

  @Post()
  @ApiOkResponse({ type: UserEntity })
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.createUserUseCase.execute(createUserDTO);
  }

  @Post('/login')
  @ApiOkResponse()
  login(@Body() createUserDTO: CreateUserDTO) {
    return this.loginUserUseCase.execute(createUserDTO);
  }
}
