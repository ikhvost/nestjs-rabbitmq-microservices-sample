import {Logger} from '@nestjs/common';
import {ConfigService} from '@nestjs/config';
import {NestFactory} from '@nestjs/core';
import {MicroserviceOptions, Transport} from '@nestjs/microservices';
import {AppModule} from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = app.get<ConfigService>(ConfigService);
  app.connectMicroservice<MicroserviceOptions>({
    transport: Transport.RMQ,
    options: {
      urls: [config.get('AMWP_URL')],
      queue: config.get('AMWP_QUEUE'),
      queueOptions: {
        durable: false
      },
    },
  });
  app.startAllMicroservices(() => Logger.log('Microservice has started...'));
}
bootstrap();
