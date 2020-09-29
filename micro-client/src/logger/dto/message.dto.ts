import {IsNotEmptyString} from "../../common/validation/is-not-empty-string.pipe";

export class MessageDto {
  @IsNotEmptyString()
  message: string;
}