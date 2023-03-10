import { Injectable } from '@nestjs/common';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from '../../../entity/user.entity';
import { UserAddReqDto } from '../dtos/add.dto';
import { UserChangeReqDto } from '../dtos/change.dto';
import { UserDeleteReqDto } from '../dtos/delete.dto';
import * as bcrypt from 'bcrypt';
import { UserRole } from '../enums/role.enum';

@Injectable()
export class UserService {
  constructor(
    @InjectDataSource('UserConnection')
    private dataSource: DataSource
  ) {}

  async add(dto: UserAddReqDto): Promise<string | undefined | null> {
    try {
      const hashedPassword = bcrypt.hashSync(dto.password, Number(process.env.BCRYPT_ROUND) || '');

      const queryBuilder = this.dataSource.createQueryBuilder();
      const result = await queryBuilder
        .insert()
        .into(User)
        .values([{ email: dto.email, password: hashedPassword, name: dto.name, role: dto.role }])
        .execute();

      return result.identifiers[0].id;
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async list(): Promise<any> {
    try {
      const queryBuilder = this.dataSource.createQueryBuilder();
      return await queryBuilder.select(['user.email', 'user.name', 'user.role']).from(User, 'user').getMany();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async change(reqUser: any, dto: UserChangeReqDto): Promise<string | undefined | null> {
    try {
      if (!reqUser || !reqUser.role) {
        return null;
      }

      if (reqUser.role !== UserRole.ADMIN && reqUser.email !== dto.email) {
        return null;
      }

      const json: any = {};

      if (dto.name) {
        json['name'] = dto.name;
      }

      if (dto.password) {
        const hashedPassword = bcrypt.hashSync(dto.password, Number(process.env.BCRYPT_ROUND) || '');

        json['password'] = hashedPassword;
      }

      if (dto.role && reqUser.role === UserRole.ADMIN) {
        json['role'] = dto.role;
      }

      const queryBuilder = this.dataSource.createQueryBuilder();
      const result = await queryBuilder.update(User).set(json).where('email = :email', { email: dto.email }).execute();

      return result.affected?.toString();
    } catch (error) {
      console.log(error);
      return null;
    }
  }

  async delete(dto: UserDeleteReqDto): Promise<string | undefined | null> {
    try {
      const queryBuilder = this.dataSource.createQueryBuilder();
      const result = await queryBuilder.delete().from(User).where('email = :email', { email: dto.email }).execute();

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
