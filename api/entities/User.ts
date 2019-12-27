import { PrimaryColumn, Column, Entity } from "typeorm";

@Entity()
export class User {
  @PrimaryColumn('bigint')
  id: number;

  @Column()
  currentPoem: number;
}