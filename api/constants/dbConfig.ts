import { Poem, Line, User } from "../entities";
import { ConnectionOptions } from "typeorm";

export const DB_CONFIG: ConnectionOptions = {
  type: 'mysql',
  host: process.env.DB_HOST,
  port: 3306,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: 'beyo',
  synchronize: true,
  logging: false,
  entities: [
     Poem, Line, User
  ],
  migrations: [
     '../migration/**/*.ts'
  ],
  subscribers: [
     '../subscriber/**/*.ts'
  ],
  cli: {
     'entitiesDir': 'entities',
     'migrationsDir': 'migration',
     'subscribersDir': 'subscriber'
  }
}