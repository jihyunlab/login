import { Controller, HttpStatus, Req, Res, Post, Body, Patch, Get, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { UserAddReqDto, UserAddResDto } from '../dtos/add.dto';

@Controller('/user')
export class UserController {
  constructor(private userService: UserService) {}

  @Post('/add')
  @ApiTags('User')
  @ApiOperation({
    summary: 'process add user requests',
    description: 'Process add user requests from the frontend.',
  })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', type: UserAddResDto })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error' })
  async add(@Req() req: Request, @Body() dto: UserAddReqDto, @Res() res: Response): Promise<Response> {
    const result = await this.userService.add(dto);

    if (!result) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ code: -1, message: 'add user failed.' });
    }

    return res.status(HttpStatus.CREATED).send({ code: 0, message: 'success' });
  }
}
