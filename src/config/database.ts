import * as dotenv from 'dotenv';
import { Dialect } from 'sequelize';

dotenv.config();

const {
  DB_DAILECT,
  DB_HOST,
  DB_USERNAME,
  DB_PASS,
  DB_NAME,
  DB_LOGGING,
  DB_PORT,
} = process.env;

export interface IDatabaseEnvVar {
  dialect: Partial<Dialect>;
  host: string;
  port: number;
  username: string;
  password: string;
  database: string;
  logging: boolean;
}

const development: IDatabaseEnvVar = {
  dialect: (DB_DAILECT as Partial<Dialect>) || 'mysql',
  host: DB_HOST || '',
  port: Number(DB_PORT) || 3306,
  username: DB_USERNAME || '',
  password: DB_PASS || '',
  database: DB_NAME || '',
  logging: DB_LOGGING === 'true',
};

const config = (): IDatabaseEnvVar => development;

export default config;
