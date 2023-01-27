import {
  BadRequestException,
  UnauthorizedException,
} from '@nestjs/common';
import { Usuario } from 'src/database/usuario/usuario.entity';

const jwt = require('jsonwebtoken');

export const criarToken = (payload: { email: string; id: number }) => {
  const token = jwt.sign(payload, process.env.SECRET_TOKEN_JWT, {
    expiresIn: '1h', // token expira em 1 hora
  });

  return token;
};

export const validaToken = async (token: string, Function: Promise<any>) => {
  try {
    if (!token) {
      throw new UnauthorizedException('Invalid token');
    }

    const tokenResult = await jwt.verify(token.split(' ')[1], process.env.SECRET_TOKEN_JWT);

    if(tokenResult.id) {
        return Function;
    }
  } catch (err) {
    throw new BadRequestException('Token not valid');
  }
};
