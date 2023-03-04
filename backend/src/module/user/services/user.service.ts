import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from 'src/entity/user.entity';
import { UserAddReqDto } from '../dtos/add.dto';
import { UserChangeReqDto } from '../dtos/change.dto';
import { UserDeleteReqDto } from '../dtos/delete.dto';

@Injectable()
export class UserService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>
  ) {}

  async add(dto: UserAddReqDto): Promise<string | undefined | null> {
    try {
      const result = await this.userRepository
        .createQueryBuilder()
        .insert()
        .values([{ email: dto.email, password: dto.password, name: dto.name, role: dto.role }])
        .execute();

      return result.identifiers[0].id;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async list(): Promise<any> {
    try {
      return await this.userRepository.createQueryBuilder().select().getMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async change(dto: UserChangeReqDto): Promise<string | undefined | null> {
    try {
      const json: any = {};

      if (dto.name) {
        json['name'] = dto.name;
      }

      if (dto.password) {
        json['password'] = dto.password;
      }

      if (dto.role) {
        json['role'] = dto.role;
      }

      const result = await this.userRepository
        .createQueryBuilder()
        .update()
        .set(json)
        .where('email = :email', { email: dto.email })
        .execute();

      return result.affected?.toString();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async delete(dto: UserDeleteReqDto): Promise<string | undefined | null> {
    try {
      const result = await this.userRepository
        .createQueryBuilder()
        .delete()
        .where('email = :email', { email: dto.email })
        .execute();

      if (!result) {
        return undefined;
      }

      return result.affected?.toString();
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
