import { Request, Response } from "express";
import { ComplimentService } from "../services/ComplimentService";

export class CreateComplimentController {
  async handle(request: Request, response: Response) {
    const { user_sender_id, user_receiver_id, tag_id, message } = request.body;

    const complimentService = new ComplimentService();
    const compliment = await complimentService.execute({ user_sender_id, user_receiver_id, tag_id, message});

    return response.json(compliment);
  }
}