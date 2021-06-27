import { getCustomRepository } from "typeorm";
import { ComplimentRepository } from "../repositories/ComplimentRepository";


export class ListSendedComplimentsService {
  async execute(user_id: string) {
    const complimentRepository = getCustomRepository(ComplimentRepository);

    const compliments = await complimentRepository.find({
      where: {
        user_sender_id: user_id
      },
      relations: ['user_sender', 'user_receiver', 'tag']
    })

    return compliments;
  }
}