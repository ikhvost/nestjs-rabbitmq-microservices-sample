import {Module} from '@nestjs/common';
import {ConfigModule, ConfigService} from '@nestjs/config';
import {ClientsModule, Transport} from '@nestjs/microservices';
import {Constans} from '../common/constans.enum';
import {LoggerController} from './logger.controller';

@Module({
  imports: [
    ConfigModule,
    ClientsModule.registerAsync([{
      imports: [ConfigModule],
      name: Constans.LOGGER_SERVICE_NAME,
      useFactory: (config: ConfigService) => ({
        transport: Transport.RMQ,
        options: {
          urls: [config.get('AMWP_URL')],
          queue: config.get('LOGGER_AMWP_QUEUE'),
          queueOptions: {
            durable: false
          }
        }
      }),
      inject: [ConfigService]
    }])
  ],
  controllers: [LoggerController]
})
export class LoggerModule {
}
