import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entity/user.entity';
import { UserModule } from './module/user/user.module';

@Module({
  imports: [
    ConfigModule.forRoot({ envFilePath: [`${process.cwd()}/.env`], isGlobal: true }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: () => ({
        type: 'mongodb',
        host: process.env.DATABASE_HOST || '',
        port: Number(process.env.DATABASE_PORT) || 8080,
        database: process.env.DATABASE_NAME || '',
        entities: [__dirname + '/entity/*.entity.ts'],
        autoLoadEntities: true,
        synchronize: false,
      }),
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
