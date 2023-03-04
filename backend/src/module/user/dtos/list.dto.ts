import { ApiProperty } from '@nestjs/swagger';

export class UserListReqDto {}

export class UserListResDto {
  @ApiProperty({ type: Number, required: true, example: 0 })
  code: string;

  @ApiProperty({ type: String, required: true, example: 'success' })
  message: string;

  @ApiProperty({
    type: Object,
    isArray: true,
    required: true,
    example: [{ email: 'jihyunlab@gmail.com', name: 'Jihyun', role: ['Admin'] }],
  })
  data: object[];
}
