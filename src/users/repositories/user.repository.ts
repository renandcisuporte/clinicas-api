import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract loginUser(email: string): Promise<UserEntity>;
  abstract createUser(input: CreateUserDTO): Promise<UserEntity>;
  abstract alreadyExists(email: string): Promise<boolean>;
}
