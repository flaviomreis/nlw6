import { getCustomRepository } from "typeorm";
import { HttpStatus } from "../errors/HttpStatus";
import { TagRepository } from "../repositories/TagRepository";

interface ITagRequest {
  name: string;
}

export class CreateTagService {
  async execute( { name }: ITagRequest ) {
    const tagRepository = getCustomRepository(TagRepository);

    if (! name) {
      throw new HttpStatus('Name cannot be empty.', 400);
    }

    const foundByName = await tagRepository.findOne({
      name
    });

    if (foundByName) {
      throw new HttpStatus('Tag already exists.', 400);
    }

    const tag = tagRepository.create({
      name
    });

    await tagRepository.save(tag);

    return tag;
  }
}