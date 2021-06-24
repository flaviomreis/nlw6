import { getCustomRepository, getRepository } from "typeorm";
import { HttpStatus } from "../errors/HttpStatus";
import { ComplimentRepository } from "../repositories/ComplimentRepository";
import { UserRepository } from "../repositories/UserRepository";

interface IComplimentRequest {
  user_sender_id: string;
  user_receiver_id: string;
  tag_id: string;
  message: string;
}

export class ComplimentService {
  async execute({ user_sender_id, user_receiver_id, tag_id, message }: IComplimentRequest) {

    const complimentRepository = getCustomRepository(ComplimentRepository);
    const userRepository = getCustomRepository(UserRepository);

    const userSenderExists = await userRepository.findOne(user_sender_id);

    if (! userSenderExists) {
      throw new HttpStatus('User Sender does not exists.', 400);
    }

    const userReceiverExists = await userRepository.findOne(user_receiver_id);

    if (! userReceiverExists) {
      throw new HttpStatus('User Receiver does not exists.', 400);
    }

    if (user_sender_id === user_receiver_id) {
      throw new HttpStatus('Users Sender and Receiver cannot be the same.', 400);
    }

    const complimentTagExits = await complimentRepository.findOne({
      user_receiver_id,
      tag_id
    })

    if (complimentTagExits) {
      throw new HttpStatus('Compliment tag already exists to Receiver.', 400);
    }

    if (! message) {
      throw new HttpStatus('Message cannot be empty.', 400);
    }

    const compliment = complimentRepository.create({
      user_sender_id,
      user_receiver_id,
      tag_id,
      message
    });

    await complimentRepository.save(compliment);

    return compliment;
  }
}