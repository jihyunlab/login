import { Controller, HttpStatus, Req, Res, Post, Body, Patch, Get, Delete } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { UserService } from '../services/user.service';
import { UserAddReqDto, UserAddResDto } from '../dtos/add.dto';
import { UserListResDto } from '../dtos/list.dto';
import { UserChangeReqDto, UserChangeResDto } from '../dtos/change.dto';
import { UserDeleteReqDto, UserDeleteResDto } from '../dtos/delete.dto';

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

  @Get('/list')
  @ApiTags('User')
  @ApiOperation({
    summary: 'process user list requests',
    description: 'Process user list requests from the frontend.',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'OK' })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized', type: UserListResDto })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error' })
  async list(@Req() req: Request, @Res() res: Response): Promise<Response> {
    const result = await this.userService.list();

    if (!result) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ code: -1, message: 'failed to get user list' });
    }

    return res.status(HttpStatus.OK).send({ code: 0, message: 'success', data: result });
  }

  @Patch('/change')
  @ApiTags('User')
  @ApiOperation({
    summary: 'process change user requests',
    description: 'Process change user requests from the frontend.',
  })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', type: UserChangeResDto })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error' })
  async change(@Req() req: Request, @Body() dto: UserChangeReqDto, @Res() res: Response): Promise<Response> {
    const result = await this.userService.change(dto);

    if (!result) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ code: -1, message: 'change user failed' });
    }

    return res.status(HttpStatus.CREATED).send({ code: 0, message: 'success' });
  }

  @Delete('/delete')
  @ApiTags('User')
  @ApiOperation({
    summary: 'process delete user requests',
    description: 'Process delete user requests from the frontend.',
  })
  @ApiResponse({ status: HttpStatus.OK, description: 'OK', type: UserDeleteResDto })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error' })
  async delete(@Req() req: Request, @Body() dto: UserDeleteReqDto, @Res() res: Response): Promise<Response> {
    const result = await this.userService.delete(dto);

    if (!result) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ code: -1, message: 'delete user failed' });
    }

    return res.status(HttpStatus.CREATED).send({ code: 0, message: 'success' });
  }
}
