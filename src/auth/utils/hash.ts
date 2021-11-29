import * as bcrypt from 'bcrypt';

interface HashOptions {
  saltRounds: number | 7;
}

const options: HashOptions = {
  saltRounds: 7,
};

export class Hash {
  static async make(rawString: string): Promise<string> {
    return await bcrypt.hash(rawString, options.saltRounds );
  }

  static async match(rawString: string, hash: string): Promise<boolean> {
    return await bcrypt.compare(rawString, hash);
  }
}
