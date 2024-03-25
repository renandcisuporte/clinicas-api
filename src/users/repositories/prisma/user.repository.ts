import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { UserRepository } from '../user.repository';
import { PrismaService } from 'src/database/prisma.service';
import { UserEntity } from 'src/users/entities/user.entity';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(input: CreateUserDTO): Promise<UserEntity> {
    console.log('input', input);

    // return new UserEntity(
    //   await this.prisma.user.create({
    //     data: input,
    //   }),
    // );

    return new UserEntity(input);
  }
}
