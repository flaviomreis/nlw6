import { compare, hash } from "bcryptjs";
import { sign, SignOptions } from "jsonwebtoken";

export class Crypt {

  private static readonly JWT_KEY:string = 'd43537abdd38ecb8783542fc8b972d71';

  static async crypt(value: string): Promise<string> {
    const valueHash = await hash(value, 8);

    return valueHash;
  }

  static async compare(value: string, hashValue: string): Promise<boolean> {
    const isEqual = compare(value, hashValue);

    return isEqual;
  }

  static sign(payload: object, options: SignOptions): string {
    const token = sign(payload, Crypt.JWT_KEY, options);

    return token;
  }
}