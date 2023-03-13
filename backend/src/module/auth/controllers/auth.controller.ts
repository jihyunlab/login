import { Controller, HttpStatus, Req, Res, Post, Body, UseGuards } from '@nestjs/common';
import { ApiOperation, ApiTags, ApiResponse } from '@nestjs/swagger';
import { Request, Response } from 'express';
import { LocalAuthGuard } from '../guards/localauth.guard';
import { AuthService } from '../services/auth.service';
import { AuthLoginReqDto, AuthLoginResDto } from '../dtos/login.dto';

@Controller('/auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('/login')
  @ApiTags('Auth')
  @UseGuards(LocalAuthGuard)
  @ApiOperation({
    summary: 'process login requests',
    description: 'Process login requests from the frontend.',
  })
  @ApiResponse({ status: HttpStatus.CREATED, description: 'Created', type: AuthLoginResDto })
  @ApiResponse({ status: HttpStatus.UNAUTHORIZED, description: 'Unauthorized' })
  @ApiResponse({ status: HttpStatus.INTERNAL_SERVER_ERROR, description: 'Internal Server Error' })
  async login(@Req() req: Request, @Body() dto: AuthLoginReqDto, @Res() res: Response): Promise<Response> {
    const result = await this.authService.login(req.user);

    if (!result) {
      return res.status(HttpStatus.INTERNAL_SERVER_ERROR).send({ code: -1, message: 'login failed.' });
    }

    return res.status(HttpStatus.CREATED).send({ code: 0, message: 'success', access_token: result });
  }
}
