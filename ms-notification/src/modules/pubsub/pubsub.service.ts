import { Inject, Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { ClientProxy } from '@nestjs/microservices';

@Injectable()
export class PubsubService {
  constructor(
    @Inject('REDIS_CLIENT') private clientRedis: ClientProxy,
    private configService: ConfigService,
  ) {}

  async get<T>(channel: string, value: object, service = ''): Promise<T> {
    return (await this.clientRedis
      .send({ cmd: this.getChannel(channel, service) }, value)
      .toPromise()) as T;
  }

  async set(key: string, value: unknown): Promise<string | null> {
    const setValue = (await this.clientRedis
      .send('set', [key, value])
      .toPromise()) as string | null;
    return setValue;
  }

  publish(channel: string, value: object, service = '') {
    this.clientRedis.emit(this.getChannel(channel, service), value);
  }

  private getChannel(channel: string, service: string): string {
    return (service ?? this.configService.get('API_TAG')) + '-' + channel;
  }
}
