import {Body, Controller, Inject, Post} from '@nestjs/common';
import {ClientProxy} from '@nestjs/microservices';
import {Constans} from '../common/constans.enum';
import {MessageDto} from './dto/message.dto';

@Controller('logger')
export class LoggerController {

  constructor(@Inject(Constans.LOGGER_SERVICE_NAME) private client: ClientProxy) {
  }

  @Post('log')
  log(@Body() dto: MessageDto): Promise<void> {
    return this.client.emit('log', dto.message).toPromise();
  }

  @Post('error')
  error(@Body() dto: MessageDto): Promise<void> {
    return this.client.emit('error', dto.message).toPromise();
  }
}
