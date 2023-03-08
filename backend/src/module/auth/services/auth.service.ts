import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectDataSource } from '@nestjs/typeorm';
import { DataSource } from 'typeorm';
import { User } from '../../../entity/user.entity';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectDataSource('AuthConnection')
    private dataSource: DataSource,
    private readonly jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const queryBuilder = this.dataSource.createQueryBuilder();
    const user = await queryBuilder
      .select('user')
      .from(User, 'user')
      .where('user.email = :email', { email: email })
      .getOne();

    if (user && user.password && bcrypt.compareSync(password, user.password)) {
      return user;
    }

    return null;
  }

  async login(reqUser: any): Promise<string | undefined | null> {
    if (!reqUser) {
      return undefined;
    }

    try {
      return this.jwtService.sign({
        email: reqUser.email,
        name: reqUser.name,
        role: reqUser.role,
      });
    } catch (error) {
      console.log(error);
      return null;
    }
  }
}
