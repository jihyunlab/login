import { Injectable, CanActivate, ExecutionContext, UnauthorizedException } from '@nestjs/common';
import { Reflector } from '@nestjs/core';
import { Observable } from 'rxjs';
import { UserRole } from '../enums/role.enum';
import { USERROLES_KEY } from '../decorators/roles.decorator';

@Injectable()
export class UserRolesGuard implements CanActivate {
  constructor(private reflector: Reflector) {}

  canActivate(context: ExecutionContext): boolean | Promise<boolean> | Observable<boolean> {
    const requiredRoles = this.reflector.getAllAndOverride<UserRole[]>(USERROLES_KEY, [
      context.getHandler(),
      context.getClass(),
    ]);

    if (!requiredRoles) {
      return true;
    }

    const req = context.switchToHttp().getRequest();

    if (!req.user?.role) {
      return false;
    }

    const role = new Set(req.user.role);

    for (let i = 0; i < requiredRoles.length; i++) {
      if (role.has(requiredRoles[i])) {
        return true;
      }
    }

    throw new UnauthorizedException({
      code: -200,
      message: 'does not have ' + JSON.stringify(requiredRoles) + ' role',
    });
  }
}
