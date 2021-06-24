import { hash } from "bcryptjs";
import { getRepository } from "typeorm";
import { User } from "../entities/User";
import { HttpStatus } from "../errors/HttpStatus";
import { Crypt } from "../utils/Crypt";

interface IAuthenticateRequest {
  email: string;
  password: string;
}

export class AuthenticateUserService {
  async execute( { email, password }: IAuthenticateRequest) {
    const userRepository = getRepository(User);

    const passwordHash = await Crypt.crypt(password);

    const user = await userRepository.findOne({
      email
    });

    if (! user) {
      throw new HttpStatus('Email or password incorrect.', 400);
    }

    const passwordMatch = Crypt.compare(password, user.password);

    if (! passwordMatch) {
      throw new HttpStatus('Email or password incorrect.', 400);
    }

    const token = Crypt.sign(
      {
        email: user.email
      },
      {
        subject: user.id,
        expiresIn: "1d"
      }
    );

    return token;
  }
}