import { Poem } from "../entities";
import { Connection } from "typeorm";

export async function getLastPoemId(connection: Connection): Promise<number> {
  const poems = await connection.manager.find(Poem, {
    order: {
      id: 'DESC'
    },
    take: 1
  })

  return poems[0].id
}