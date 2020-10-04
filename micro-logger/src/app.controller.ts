import {Controller, Logger} from '@nestjs/common';
import {EventPattern, Payload} from '@nestjs/microservices';

@Controller()
export class AppController {
  
  @EventPattern('log')
  log(@Payload() message: string): void {
    Logger.log(message);
  }

  @EventPattern('error')
  error(@Payload() message: string): void {
    Logger.error(message);
  }
}
