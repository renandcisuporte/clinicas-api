import { Exclude } from 'class-transformer';
import { $Enums, User } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export enum UserRoles {
  root = 'root',
  master = 'master',
  admin = 'admin',
  user = 'user',
}

export class UserEntity implements User {
  constructor(partial: Partial<UserEntity>) {
    Object.assign(this, partial);
  }

  @ApiProperty()
  id: string;

  @ApiProperty()
  created_at: Date;

  @ApiProperty()
  updated_at: Date;

  @ApiProperty()
  deleted_at: Date;

  @ApiProperty()
  roules: $Enums.USER_ROULES;

  @ApiProperty()
  full_name: string;

  @ApiProperty()
  phone: string;

  @ApiProperty()
  email: string;

  @Exclude()
  password: string;

  @ApiProperty()
  cover_image: string;

  @ApiProperty()
  actived_at: Date;
}
