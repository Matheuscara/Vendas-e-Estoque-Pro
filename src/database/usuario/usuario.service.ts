import { Inject, NotFoundException } from '@nestjs/common';
import { UsuarioDto } from 'src/modules/Dto/Usuario.dto';
import { loginUsuarioDto } from 'src/modules/Dto/loginUsuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { criarToken } from 'src/utils/tokenJWT';
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async buscaUsuarioId(token: string): Promise<Usuario | undefined> {

    const tokenInfo = await jwt.verify(token.split(' ')[1], process.env.SECRET_TOKEN_JWT);
    const user = await this.usuarioRepository.findOne({
      where: {
        id: tokenInfo.id,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

    delete user.senha;

    return user;

  }

  async adicionarUsuario(usuario: UsuarioDto) {
    bcrypt.hash(
      usuario.senha,
      Number(process.env.SECRET_BCRYPT_KEY),
      (err, hash) => {
        usuario.senha = hash;
        this.usuarioRepository.save(usuario);
      },
    );
  }

  async login(loginUsuarioDto: loginUsuarioDto) {
    const user = await this.usuarioRepository.findOne({
      where: {
        email: loginUsuarioDto.email,
      },
    });

    if (!user) {
      throw new NotFoundException('Email not found');
    }

    const result = bcrypt.compare(loginUsuarioDto.senha, user.senha);

    if (result) {
      return criarToken({
        email: user.email,
        id: user.id,
      });
    } else {
      throw new NotFoundException('Email not found');
    }
  }
}
