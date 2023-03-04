import { ApiProperty } from '@nestjs/swagger';

export class UserChangeReqDto {
  @ApiProperty({ type: String, required: true, example: 'jihyunlab@gmail.com' })
  email: string;

  @ApiProperty({ type: String, required: false, example: '1q2w3e4r' })
  password: string;

  @ApiProperty({ type: String, required: false, example: 'Jihyun' })
  name: string;

  @ApiProperty({ type: String, isArray: true, required: false, example: ['Admin'] })
  role: string[];
}

export class UserChangeResDto {
  @ApiProperty({ type: Number, required: true, example: 0 })
  code: string;

  @ApiProperty({ type: String, required: true, example: 'success' })
  message: string;
}
