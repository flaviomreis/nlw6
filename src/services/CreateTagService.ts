import { getCustomRepository } from "typeorm";
import { TagRepository } from "../repositories/TagRepository";

interface ITagRequest {
  name: string;
}

export class CreateTagService {
  async execute( { name }: ITagRequest ) {
    const tagRepository = getCustomRepository(TagRepository);

    if (! name) {
      throw new Error('Name cannot be empty.');
    }

    const foundByName = await tagRepository.findOne({
      name
    });

    if (foundByName) {
      throw new Error('Tag already exists.');
    }

    const tag = tagRepository.create({
      name
    });

    await tagRepository.save(tag);

    return tag;
  }
}