import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract createUser(input: CreateUserDTO): Promise<UserEntity>;
  abstract isMatchUser(email: string): Promise<boolean>;
}
