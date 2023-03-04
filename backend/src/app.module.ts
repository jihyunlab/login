import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { OrmDataSource } from './orm.config';
import { UserModule } from './module/user/user.module';

/**
 * PostgreSQL Preferences
 * After creating the login database in pgAdmin, create a user and initialize the password with the following command in psql.
 *
 * CREATE USER jihyunlab;
 * SELECT * FROM PG_SHADOW;
 * ALTER USER jihyunlab PASSWORD '1q2w3e4r';
 *
 * GRANT ALL ON SCHEMA public TO jihyunlab;
 * GRANT SELECT, INSERT, UPDATE, DELETE ON ALL TABLES IN SCHEMA public TO jihyunlab;
 *
 * After database default setup, you need to configure migration settings in package.json as follows:
 * "typeorm": "typeorm-ts-node-esm -d ./src/orm.config.ts",
 * "typeorm:create": "npm run typeorm migration:create",
 * "typeorm:generate": "npm run typeorm migration:generate",
 * "typeorm:run": "npm run typeorm migration:run",
 * "typeorm:revert": "npm run typeorm migration:revert"
 *
 * After setting up your migrations, create them as follows:
 * npm run typeorm:create ./src/migration/CreateUser
 *
 * After creating the migration, implement the created migration.
 *
 * Create a migration from an entity using the following command. However, generated migrations can corrupt the database.
 * npm run typeorm:generate ./src/migration/CreateUser
 *
 * Create and implement a migration, then register the migration in the orm.config.ts file.
 * After registering the migration, run the migration. To apply migrations automatically, add the migrationsRun: true option to your typeorm module.
 * npm run typeorm:run
 *
 * If migrations run incorrectly, here's how to undo migrations.
 * npm run typeorm:revert
 */
@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`${process.cwd()}/.env`], isGlobal: true }),
    TypeOrmModule.forRoot({
      ...OrmDataSource.options,
      // migrationsRun: true,
      autoLoadEntities: true,
      keepConnectionAlive: true,
    }),
    UserModule,
  ],
})
export class AppModule {}
// export class AppModule implements NestModule {
//   configure(consumer: MiddlewareConsumer) {
//     consumer.apply(LoggerMiddleware).forRoutes('*');
//   }
// }
