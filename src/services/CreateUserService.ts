import { getCustomRepository } from "typeorm";
import { HttpStatus } from "../errors/HttpStatus";
import { UserRepository } from "../repositories/UserRepository";

interface IUserRequest {
  name: string;
  email: string;
  admin?: boolean;
}

export class CreateUserService {
  async execute( { name, email, admin }: IUserRequest) {
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

    const user = userRepository.create({
      name,
      email,
      admin
    });

    await userRepository.save(user);

    return user;
  }
}