import {
  Column,
  CreateDateColumn,
  Entity,
  PrimaryColumn,
  UpdateDateColumn,
} from "typeorm";
import { v4 as uuid } from "uuid";
import { Expose } from "class-transformer";

@Entity("tags")
export class Tag {
  @PrimaryColumn()
  readonly id: string;

  @Column()
  name: string;

  @Expose({ name: "hashtag" })
  customName(): string {
    return `#${this.name}`;
  }

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;

  constructor() {
    if (!this.id) {
      this.id = uuid();
    }
  }
}
