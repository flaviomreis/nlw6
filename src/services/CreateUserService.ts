import { getCustomRepository } from "typeorm";
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
      throw new Error('Email cannot be empty.')
    }

    if (! name) {
      throw new Error('Name cannot be empty');
    }

    const foundByEmail = await userRepository.findOne({
      email
    });

    if (foundByEmail) {
      throw new Error('User already exists with this email.');
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