import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { AuthWithUseCaseController } from 'src/auth/auth-with-use-case.controller';
import { PrismaAuthRepository } from 'src/auth/repositories/prisma/auth.repository';
import { LocalStrategy } from 'src/auth/strategies/local.strategy';
import { PrismaService } from 'src/database/prisma.service';
import { AuthUserUseCase } from 'src/auth/use-cases/auth-user.use-case';
import { JwtServiceShared } from 'src/utils/shared/utils/jwt.shared';

@Module({
  imports: [
    JwtModule.register({
      privateKey: process.env.JWT_SECRET_KEY,
      signOptions: {
        expiresIn: process.env.JWT_EXPIRATION_TIME,
      },
    }),
  ],
  controllers: [AuthWithUseCaseController],
  providers: [
    PrismaService,
    LocalStrategy,
    AuthUserUseCase,
    { provide: 'JwtService', useClass: JwtServiceShared },
    { provide: 'AuthRepository', useClass: PrismaAuthRepository },
  ],
})
export class AuthModule {}
