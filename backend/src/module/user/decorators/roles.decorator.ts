import { SetMetadata } from '@nestjs/common';
import { UserRole } from '../enums/role.enum';

export const USERROLES_KEY = 'UserRoles';
export const UserRoles = (...userRoles: UserRole[]) => SetMetadata(USERROLES_KEY, userRoles);
