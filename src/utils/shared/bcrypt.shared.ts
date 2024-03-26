import * as bcrypt from 'bcrypt';

export abstract class Bcrypt {
  abstract hash(hashString: string): Promise<string>;
  abstract compare(password: string, hashPassword: string): Promise<boolean>;
}

export class BcryptShared implements Bcrypt {
  private saltRounds = 10;

  async compare(password: string, hashPassword: string): Promise<boolean> {
    return await bcrypt.compare(password, hashPassword);
  }

  async hash(hashString: string): Promise<string> {
    const salt = await bcrypt.genSalt(this.saltRounds);
    const hash = await bcrypt.hash(hashString, salt);
    return hash;
  }
}
