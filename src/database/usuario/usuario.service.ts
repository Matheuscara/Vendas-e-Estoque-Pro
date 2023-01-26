import { Inject, NotFoundException } from '@nestjs/common';
import { UsuarioDto } from 'src/modules/Dto/Usuario.dto';
import { loginUsuarioDto } from 'src/modules/Dto/loginUsuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';
const bcrypt = require('bcrypt');

export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async findAll(): Promise<Usuario[]> {
    return this.usuarioRepository.find();
  }

  async buscaUsuarioId(id: string): Promise<Usuario | undefined> {
    if (id == null || isNaN(Number(id))) {
      throw new NotFoundException('User not found');
    }

    const userId = Number(id);

    const user = await this.usuarioRepository.findOne({
      where: {
        id: userId,
      },
    });

    if (!user) {
      throw new NotFoundException('User not found');
    }

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
    console.log(user);
    if (!user) {
      throw new NotFoundException('User not found');
    }

    bcrypt.compare(loginUsuarioDto.senha, user.senha, (err, result) => {
      if (result) {
        return 'Usuario Logado';
      } else {
        throw new NotFoundException('User not found');
      }
    });
  }
}
