import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { PrismaModule } from '../prisma/prisma.module';
import { PubSubModule } from '../pubsub/pubsub.module';

@Module({
  imports: [PrismaModule, PubSubModule],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}
