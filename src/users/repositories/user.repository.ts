import { CreateUserDTO } from '../dtos/create-user.dto';
import { UserEntity } from '../entities/user.entity';

export abstract class UserRepository {
  abstract meUser(id: string): Promise<UserEntity>;
  abstract loginUser(email: string): Promise<UserEntity | null>;
  abstract createUser(input: CreateUserDTO): Promise<UserEntity>;
  abstract alreadyExists(email: string): Promise<boolean>;
}
