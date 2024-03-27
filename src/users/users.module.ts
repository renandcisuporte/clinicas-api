import { Module } from '@nestjs/common';
import { UsersWithUseCaseController } from './users-with-use-case.controller';
import { CreateUserUseCase } from './use-cases/create-user.use-case';
import { PrismaUserRepository } from './repositories/prisma/user.repository';
import { PrismaService } from 'src/database/prisma.service';

@Module({
  controllers: [UsersWithUseCaseController],
  providers: [
    PrismaService,
    CreateUserUseCase,
    { provide: 'UserRepository', useClass: PrismaUserRepository },
  ],
})
export class UsersModule {}
