import { Logger, Module } from '@nestjs/common';
import { UsersWithUseCaseController } from './users-with-use-case.controller';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { LoginUserUseCase } from './use-cases/login-user.use-case';
import { PrismaUserRepository } from './repositories/prisma/user.repository';
import { PrismaService } from 'src/database/prisma.service';
import { JwtModule } from '@nestjs/jwt';
import { BcryptShared } from 'src/utils/shared/bcrypt.shared';
import { JwtTokenShared } from 'src/utils/shared/jwt.shared';

@Module({
  imports: [JwtModule.register({ secret: 'hard!to-guess_secret' })],
  controllers: [UsersWithUseCaseController],
  providers: [
    Logger,
    PrismaService,
    LoginUserUseCase,
    CreateUserUseCase,
    {
      provide: 'JwtService',
      useClass: JwtTokenShared,
    },
    {
      provide: 'Bcrypt',
      useClass: BcryptShared,
    },
    {
      provide: 'UserRepository',
      useClass: PrismaUserRepository,
    },
  ],
})
export class UsersModule {}
