export abstract class JwtService {
  abstract validate(token: string): Promise<any>;
  abstract generate(payload: any): void;
}
