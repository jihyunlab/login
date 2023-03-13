import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule, TypeOrmModuleOptions } from '@nestjs/typeorm';
import { OrmDataSource } from './orm.config';
import { LoggerMiddleware } from './common/middlewares/logger.middleware';
import { UserModule } from './module/user/user.module';
import { AuthModule } from './module/auth/auth.module';

const OrmModuleOptions: TypeOrmModuleOptions = {
  ...OrmDataSource.options,
  autoLoadEntities: true,
  keepConnectionAlive: true,
  // migrationsRun: true,
};

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`${process.cwd()}/.env`], isGlobal: true }),
    TypeOrmModule.forRoot({ ...OrmModuleOptions, name: 'AuthConnection' }),
    TypeOrmModule.forRoot({ ...OrmModuleOptions, name: 'UserConnection' }),
    AuthModule,
    UserModule,
  ],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer.apply(LoggerMiddleware).forRoutes('*');
  }
}
