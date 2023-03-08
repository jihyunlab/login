import { ApiProperty } from '@nestjs/swagger';

export class AuthLoginReqDto {
  @ApiProperty({ type: String, required: true, example: 'jihyunlab@gmail.com' })
  email: string;

  @ApiProperty({ type: String, required: true, example: '1q2w3e4r' })
  password: string;
}

export class AuthLoginResDto {
  @ApiProperty({ type: Number, required: true, example: 0 })
  code: string;

  @ApiProperty({ type: String, required: true, example: 'success' })
  message: string;

  @ApiProperty({
    type: String,
    required: false,
    example:
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJlbWFpbCI6InBoaWxqdW5nLnl1bkBnbWFpbC5jb20iLCJuYW1lIjoiUGhpbCIsInJvbGUiOiJBZG1pbiIsImNyZWF0ZWRfYXQiOiIyMDIzLTAyLTA1VDA3OjE5OjQyLjc0NFoiLCJpYXQiOjE2NzU1ODYzMTAsImV4cCI6MTY3NTY3MjcxMH0.wv9plg4UjuTT2HPx_Wqv7L_lW_YcQyG4eZ99nvjSBz8',
  })
  access_token: string;
}
