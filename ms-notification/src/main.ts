import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { swaggerConfig } from './common/config/swagger.config';
import { ValidationPipe } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { redisConfig } from './common/config/redis.config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);

  app.useGlobalPipes(new ValidationPipe());
  swaggerConfig(app, 'development');

  const PORT = configService.get<number>('PORT') || 3001;
  await app.listen(PORT);

  await redisConfig(configService);
}

bootstrap();
