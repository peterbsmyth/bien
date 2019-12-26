import 'reflect-metadata';
import { createConnection } from 'typeorm';
import { Line, Poem } from '../entities';

export async function getSenderNextPoem(sender: number): Promise<any> {
  const connection = await createConnection({
    "type": "mysql",
    "host": process.env.DB_HOST,
    "port": 3306,
    "username": process.env.DB_USER,
    "password": process.env.DB_PASSWORD,
    "database": "beyo",
    "synchronize": true,
    "logging": false,
    "entities": [
       Poem, Line
    ],
    "migrations": [
       "../migration/**/*.ts"
    ],
    "subscribers": [
       "../subscriber/**/*.ts"
    ],
    "cli": {
       "entitiesDir": "entities",
       "migrationsDir": "migration",
       "subscribersDir": "subscriber"
    }
  });

  let savedPoem = await connection.manager.findOne(Poem, 1, {
     relations: ['lines']
  });

  return savedPoem;
}