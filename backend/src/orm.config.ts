import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './entity/user.entity';
import { CreateUser1677951098433 } from './migration/1677951098433-CreateUser';

dotenv.config();

const OrmDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || '',
  port: Number(process.env.DATABASE_PORT) || 5432,
  database: process.env.DATABASE_NAME || '',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  synchronize: false,
  logging: true,
  entities: [User],
  migrations: [CreateUser1677951098433],
  migrationsTableName: 'migrations',
};

export const OrmDataSource = new DataSource(OrmDataSourceOptions);
