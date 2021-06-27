import { Request, Response } from "express";
import { ListSendedComplimentsService } from "../services/ListSendedComplimentsService";


export class ListSendedComplimentsController {
  async handle(request: Request, response: Response) {
    const { user_id } = request;

    const listSendedComplimentsService = new ListSendedComplimentsService();

    const compliments = await listSendedComplimentsService.execute(user_id);

    return response.json(compliments);
  }
}