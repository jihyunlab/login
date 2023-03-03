import { Injectable } from '@nestjs/common';
import { UserAddReqDto } from '../dtos/add.dto';

@Injectable()
export class UserService {
  async add(dto: UserAddReqDto): Promise<string | undefined | null> {
    return 'add';
  }
}
