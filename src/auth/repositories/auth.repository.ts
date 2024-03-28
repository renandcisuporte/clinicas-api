export abstract class AuthRepository {
  abstract meAuthUser(id: string): Promise<any>;
  abstract validateAuthUser(
    email: string,
    password: string,
  ): Promise<any | null>;
}
