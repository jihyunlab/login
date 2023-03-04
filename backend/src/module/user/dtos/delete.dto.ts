import { ApiProperty } from '@nestjs/swagger';

export class UserDeleteReqDto {
  @ApiProperty({ type: String, required: true, example: 'jihyunlab@gmail.com' })
  email: string;
}

export class UserDeleteResDto {
  @ApiProperty({ type: Number, required: true, example: 0 })
  code: string;

  @ApiProperty({ type: String, required: true, example: 'success' })
  message: string;
}
