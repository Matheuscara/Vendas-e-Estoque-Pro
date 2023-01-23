import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { usuario } from './usuario.entity';

@Injectable()
export class UsuarioService {
  constructor(
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<usuario>,
  ) {}

  async findAll(): Promise<usuario[]> {
    return this.usuarioRepository.find();
  }
}