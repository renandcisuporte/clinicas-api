import { ApiOkResponse } from '@nestjs/swagger';
import { Body, Controller, Get, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { LoginAuthUseCase } from 'src/auth/use-cases/login-auth.use-case';
import { AuthEntity } from 'src/auth/entities/auth.entity';
import { MeAuthUseCase } from './use-cases/me-auth.use-case';
import { AuthDTO } from './dtos/auth.dto';
import { Logger } from 'src/utils/logger';

@Controller('/api/v1/auth')
export class AuthWithUseCaseController {
  constructor(
    private readonly authUserUseCase: LoginAuthUseCase,
    private readonly meUserUseCase: MeAuthUseCase,
    private readonly logger: Logger,
  ) {}

  @Post()
  @UseGuards(AuthGuard('local'))
  @ApiOkResponse({ type: AuthEntity })
  async login(@Body() dto: AuthDTO, @Req() request: any): Promise<AuthEntity> {
    return this.authUserUseCase.execute(request.user);
  }

  @Get()
  @UseGuards(AuthGuard('jwt'))
  @ApiOkResponse({ type: AuthEntity })
  async me(@Req() request: any): Promise<AuthEntity> {
    this.logger.setContext('me');
    this.logger.error('TESTE');
    return this.meUserUseCase.execute(request.user);
  }
}
