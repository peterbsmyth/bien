import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { Poem } from "./";

@Entity()
export class Line {

  @PrimaryGeneratedColumn()
  id: number;

  @Column('text')
  text: string;

  @ManyToOne(type => Poem, poem => poem.lines)
  poem: Poem;

}
