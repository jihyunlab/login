import { DataSource, DataSourceOptions } from 'typeorm';
import * as dotenv from 'dotenv';
import { User } from './entity/user.entity';
import { CreateUser1678018200391 } from './migration/1678018200391-CreateUser';

dotenv.config();

const OrmDataSourceOptions: DataSourceOptions = {
  type: 'postgres',
  host: process.env.DATABASE_HOST || '',
  port: Number(process.env.DATABASE_PORT) || 5432,
  database: process.env.DATABASE_NAME || '',
  username: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  synchronize: false,
  entities: [User],
  migrations: [CreateUser1678018200391],
  migrationsTableName: 'migrations',
  logging: true,
};

export const OrmDataSource = new DataSource(OrmDataSourceOptions);

function d() {
  return 1;
}

let c = '1';
const b = 2;
const a = c === '1' ? { b: 3 } : { b: 4 };

a.b = 4;
a = { b: 4 };
a = JSON.parse(JSON.stringify(a));

const f = () => c;
