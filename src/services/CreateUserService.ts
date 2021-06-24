import { hash } from "bcryptjs";
import { getCustomRepository } from "typeorm";
import { HttpStatus } from "../errors/HttpStatus";
import { UserRepository } from "../repositories/UserRepository";
import { Crypt } from "../utils/Crypt";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
  password: string;
}

export class CreateUserService {
  async execute( { name, email, admin = false, password }: IUserRequest) {
    const userRepository = getCustomRepository(UserRepository);

    if (! email) {
      throw new HttpStatus('Email cannot be empty.', 400)
    }

    if (! name) {
      throw new HttpStatus('Name cannot be empty', 400);
    }

    const foundByEmail = await userRepository.findOne({
      email
    });

    if (foundByEmail) {
      throw new HttpStatus('User already exists with this email.', 400);
    }

    const passwordHash = await Crypt.crypt(password);

    const user = userRepository.create({
      name,
      email,
      admin,
      password: passwordHash
    });

    await userRepository.save(user);

    return user;
  }
}