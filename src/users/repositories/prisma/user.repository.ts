import { Injectable } from '@nestjs/common';
import { CreateUserDTO } from 'src/users/dtos/create-user.dto';
import { UserRepository } from '../user.repository';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PrismaUserRepository implements UserRepository {
  constructor(private readonly prisma: PrismaService) {}

  async createUser(input: CreateUserDTO): Promise<CreateUserDTO> {
    return input;
  }
}
