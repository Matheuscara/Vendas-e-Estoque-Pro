import { Injectable, Inject } from '@nestjs/common';
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

  async adicionarUsuario(usuario: UsuarioDto) {
    const novoUsuario = this.usuarioRepository.create(usuario)

    try {
      this.usuarioRepository.save(novoUsuario)
    } catch (err) {
      console.log(err)
    }
  }
}