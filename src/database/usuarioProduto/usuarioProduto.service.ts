import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { relacionamento_usuario_produto } from './relacionamento_usuarios_produtos.entity';

@Injectable()
export class UsuarioProdutoService {
  constructor(
    @Inject('USUARIO_PRODUTO_REPOSITORY')
    private usuarioProdutoRepository: Repository<relacionamento_usuario_produto>,
  ) {}

  async findAll(): Promise<relacionamento_usuario_produto[]> {
    return this.usuarioProdutoRepository.find();
  }
}