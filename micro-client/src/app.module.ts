import {Module} from '@nestjs/common';
import {ConfigModule} from '@nestjs/config';
import {LoggerModule} from './logger/logger.module';

@Module({
  imports: [
    LoggerModule,
    ConfigModule.forRoot({
      envFilePath: '.env',
      expandVariables: true
    })
  ]
})
export class AppModule {
}
