import { Injectable, Inject } from '@nestjs/common';
import { ProdutoUsuarioDto } from 'src/modules/Dto/produtoUsuario.dto';
import { Repository } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { usuario_ref_produto } from './relacionamento_usuarios_produtos.entity';

@Injectable()
export class UsuarioProdutoService {
  constructor(
    @Inject('USUARIO_PRODUTO_REPOSITORY')
    private usuarioProdutoRepository: Repository<usuario_ref_produto>) {}

  async findAll(): Promise<usuario_ref_produto[]> {
    return this.usuarioProdutoRepository.find();
  }

  // async adicionarProdutoUsuario(produtoUsuarioDto: ProdutoUsuarioDto) {

  //   this.usuarioProdutoRepository
  //     .createQueryBuilder()
  //     .insert()
  //     .into(usuario_ref_produto)
  //     .values([
  //       {
  //         id: 1,
  //         data_operacao: '2023-01-23 19:55:37',
  //         tipo_operacao: 'dfsfdss',
  //         produto_: this.usuarioRepository.findOne({
  //           where ({
  //             id: produtoUsuarioDto.id,
  //           })
  //         }),
  //       },
  //     ])
  //     .execute();
  // }
}
