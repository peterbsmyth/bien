import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import { Line } from "./";

@Entity()
export class Poem {

  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @OneToMany(type => Line, line => line.poem)
  lines: Line[];

}
