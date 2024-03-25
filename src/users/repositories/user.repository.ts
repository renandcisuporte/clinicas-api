import { CreateUserDTO } from '../dtos/create-user.dto';

export abstract class UserRepository {
  abstract createUser(input: CreateUserDTO): Promise<CreateUserDTO>;
}
