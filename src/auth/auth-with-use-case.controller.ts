import { ApiOkResponse } from '@nestjs/swagger';
import { Body, Controller, Inject, Post, Req, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { AuthUserUseCase } from 'src/auth/use-cases/auth-user.use-case';
import { AuthTokeDTO } from 'src/auth/dtos/auth-token.dto';
import { AuthDTO } from './dtos/auth.dto';

@Controller('/api/v1/auth')
export class AuthWithUseCaseController {
  @Inject(AuthUserUseCase)
  private readonly authUserUseCase: AuthUserUseCase;

  @ApiOkResponse({ type: AuthTokeDTO })
  @UseGuards(AuthGuard('local'))
  @Post()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  login(@Req() request: any, @Body() dto: AuthDTO) {
    return this.authUserUseCase.execute(request.user);
  }
}
