import { Injectable, Inject, NotFoundException } from '@nestjs/common';
import { UsuarioDto } from 'src/modules/Dto/Usuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from './usuario.entity';

@Injectable()
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
    this.usuarioRepository.save(usuario);
  }
}
