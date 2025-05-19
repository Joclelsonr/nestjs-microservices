import { Module } from '@nestjs/common';
import { PubsubService } from './pubsub.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([
      {
        name: 'REDIS_CLIENT',
        imports: [ConfigModule],
        inject: [ConfigService],
        useFactory: (configService: ConfigService) => {
          return {
            transport: Transport.REDIS,
            options: {
              host: configService.get('REDIS_HOST'),
              port: configService.get('REDIS_PORT'),
              // username: configService.get('REDIS_USERNAME'),
              password: configService.get('REDIS_PASSWORD'),
            },
          };
        },
      },
    ]),
  ],
  providers: [PubsubService],
  exports: [PubsubService],
})
export class PubsubModule {}
