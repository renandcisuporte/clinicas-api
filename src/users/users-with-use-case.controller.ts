import { Body, Controller, Inject, Post, UseFilters } from '@nestjs/common';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { CreateUserDTO } from './dtos/create-user.dto';
import { ApiOkResponse } from '@nestjs/swagger';
import { UserEntity } from './entities/user.entity';
import { HttpExceptionFilter } from 'src/utils/exceptions/http.exception';

@Controller('users')
@UseFilters(new HttpExceptionFilter())
export class UsersWithUseCaseController {
  @Inject(CreateUserUseCase)
  private readonly createUserUseCase: CreateUserUseCase;

  @Post()
  @ApiOkResponse({ type: UserEntity })
  create(@Body() createUserDTO: CreateUserDTO) {
    return this.createUserUseCase.execute(createUserDTO);
  }
}
