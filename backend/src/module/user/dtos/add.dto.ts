import { ApiProperty } from '@nestjs/swagger';

export class UserAddReqDto {
  @ApiProperty({ type: String, required: true, example: 'jihyunlab@gmail.com' })
  email: string;

  @ApiProperty({ type: String, required: true, example: '1q2w3e4r' })
  password: string;

  @ApiProperty({ type: String, required: true, example: 'Jihyun' })
  name: string;

  @ApiProperty({ type: String, required: true, example: 'User' })
  role: string;
}

export class UserAddResDto {
  @ApiProperty({ type: Number, required: true, example: 0 })
  code: string;

  @ApiProperty({ type: String, required: true, example: 'success' })
  message: string;
}
