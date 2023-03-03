import { NestApplication, NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create<NestApplication>(AppModule, { cors: true });

  if (process.env.NODE_ENV === 'development') {
    const config = new DocumentBuilder()
      .setTitle('JihyunLab Login')
      .setDescription('JihyunLab Login API description')
      .setVersion('1.0')
      .addBearerAuth(
        { type: 'http', bearerFormat: 'JWT', description: 'Access token(access-token) generated from sign in' },
        'access-token'
      )
      .build();

    const document = SwaggerModule.createDocument(app, config);

    SwaggerModule.setup('api', app, document);
  }

  await app.listen(process.env.SERVER_PORT || 3001);
}

bootstrap();
