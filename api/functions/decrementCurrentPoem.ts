import { Connection } from "typeorm";
import { User } from "../entities";
import { getLastPoemId } from ".";

export async function decrementCurrentPoem(connection: Connection, user: User): Promise<boolean> {
  if (user.currentPoem === 1) {
    user.currentPoem = await getLastPoemId(connection)
    await connection.manager.save(user)
  } else {
    user.currentPoem--
    await connection.manager.save(user)
  }

  return true
}