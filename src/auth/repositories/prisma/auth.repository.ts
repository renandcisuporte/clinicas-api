import { Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { UserEntity } from 'src/users/entities/user.entity';
import { AuthRepository } from 'src/auth/repositories/auth.repository';
import { compare } from 'bcrypt';

@Injectable()
export class PrismaAuthRepository implements AuthRepository {
  constructor(private readonly prisma: PrismaService) {}

  async meAuthUser(id: string): Promise<UserEntity | null> {
    return await this.prisma.user.findUnique({ where: { id } });
  }

  async validateAuthUser(email: string, password: string): Promise<any | null> {
    const user = await this.prisma.user.findFirst({
      where: { email },
    });
    if (!user) return null;

    const isPasswordValidate = await compare(password, user.password);
    if (!isPasswordValidate) return null;

    return user;
  }
}
