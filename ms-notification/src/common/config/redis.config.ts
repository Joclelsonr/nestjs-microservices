import { Logger } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { NestFactory } from '@nestjs/core';
import { MicroserviceOptions, Transport } from '@nestjs/microservices';
import { AppModule } from 'src/app.module';

export const redisConfig = async (configService: ConfigService) => {
  const logger = new Logger('RedisClient');

  const app = await NestFactory.createMicroservice<MicroserviceOptions>(
    AppModule,
    {
      transport: Transport.REDIS,
      options: {
        host: configService.get('REDIS_HOST'),
        port: configService.get('REDIS_PORT'),
        // username: configService.get('REDIS_USERNAME'),
        password: configService.get('REDIS_PASSWORD'),
      },
    },
  );

  await app.listen().then(() => logger.debug('Redis client is listening'));
};
