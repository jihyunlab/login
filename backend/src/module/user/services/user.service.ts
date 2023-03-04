import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { UserAddReqDto } from '../dtos/add.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async add(dto: UserAddReqDto): Promise<string | undefined | null> {
    const user = await this.userRepository.save({
      email: dto.email,
      password: dto.password,
      name: dto.name,
      role: dto.role,
    });

    return '';
  }
}
