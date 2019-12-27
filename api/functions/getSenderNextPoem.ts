import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Poem, User } from '../entities';
import { getLastPoemId } from './getLastPoemId';
import { decrementCurrentPoem } from './decrementCurrentPoem';
import { DB_CONFIG } from '../constants';

export async function getSenderNextPoem(fbRecipientId: number): Promise<any> {
  const connection = await createConnection(DB_CONFIG);
  let user = await connection.manager.findOne(User, fbRecipientId)

  if (!user) {
     const lastPoemId = await getLastPoemId(connection)
     user = await connection.manager.create(User, {
        id: fbRecipientId,
        currentPoem: lastPoemId
     })
  }

  const currentPoemId = user.currentPoem
  await decrementCurrentPoem(connection, user)

  let savedPoem = await connection.manager.findOne(Poem, currentPoemId, {
     relations: ['lines']
  });

  return savedPoem;
}