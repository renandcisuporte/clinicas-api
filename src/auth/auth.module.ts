import { Module } from '@nestjs/common';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';

import { AuthWithUseCaseController } from 'src/auth/auth-with-use-case.controller';
import { PrismaAuthRepository } from 'src/auth/repositories/prisma/auth.repository';
import { LoginAuthUseCase } from 'src/auth/use-cases/login-auth.use-case';
import { LocalStrategy } from 'src/utils/strategies/local.strategy';
import { JwtStrategy } from 'src/utils/strategies/jwt.strategy';
import { PrismaService } from 'src/database/prisma.service';
import { MeAuthUseCase } from './use-cases/me-auth.use-case';
import { Logger } from 'src/utils/logger';

@Module({
  controllers: [AuthWithUseCaseController],
  imports: [
    PassportModule,
    JwtModule.register({
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      },
      privateKey: process.env.JWT_SECRET_KEY,
    }),
  ],
  providers: [
    Logger,
    PrismaService,
    JwtStrategy,
    LocalStrategy,
    LoginAuthUseCase,
    MeAuthUseCase,
    { provide: 'AuthRepository', useClass: PrismaAuthRepository },
  ],
})
export class AuthModule {}
