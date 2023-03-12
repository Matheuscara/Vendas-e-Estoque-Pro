import {
  CanActivate,
  ExecutionContext,
  Injectable,
  UnauthorizedException,
} from '@nestjs/common';

const jwt = require('jsonwebtoken');

interface user {
    email: string,
    id: number,
    permissao: string,
    iat: number,
    exp: number,
}

@Injectable()
export class UserRoleGuard implements CanActivate {
  async canActivate(context: ExecutionContext) {
    const request = context.switchToHttp().getRequest();
    const token = request.headers.authorization;

    try {
      if (!request.headers.authorization) {
        throw new UnauthorizedException('Invalid token');
      }

      const tokenResult:user = await jwt.verify(
        token.split(' ')[1],
        process.env.SECRET_TOKEN_JWT,
      );

      if (tokenResult.id) {
        request.user = tokenResult;
        
        return true;
      }
    } catch (err) {
      throw new UnauthorizedException('Invalid token');
    }
    throw new UnauthorizedException('Invalid token');
  }
}