import { Inject, NotFoundException } from '@nestjs/common';
import { UsuarioDto } from 'src/modules/Dto/Usuario.dto';
import { loginUsuarioDto } from 'src/modules/Dto/loginUsuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
import { criarToken } from 'src/utils/tokenJWT';
const bcrypt = require('bcrypt');

export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async buscaUsuarioId(userInfo: any): Promise<Usuario | undefined> {
    const user = await this.usuarioRepository.findOne({
      where: {
        id: userInfo.id,
      },
    });

    if (!user) {
      throw new NotFoundException('Email nao encontrado');
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
      throw new NotFoundException('Email nao encontrado');
    }

    const senha = await this.compare(loginUsuarioDto.senha, user.senha);

    if(senha) {
      return criarToken({
        email: user.email,
        id: user.id,
        permissao: user.permissao
      });
    }  else {
      throw new NotFoundException('Login invalido');
    }
  }

  compare(passwordBody, encrypted) {
    return bcrypt.compare(passwordBody, encrypted);
  }
}
