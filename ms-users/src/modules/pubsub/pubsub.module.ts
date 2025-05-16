import { Global, Module } from '@nestjs/common';
import { PubSubService } from './pubsub.service';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { ClientsModule, Transport } from '@nestjs/microservices';

@Global()
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
  providers: [PubSubService],
  exports: [PubSubService],
})
export class PubSubModule {}
