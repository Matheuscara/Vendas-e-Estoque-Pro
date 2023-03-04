import { Injectable, Inject } from '@nestjs/common';
import { ProdutoDto } from 'src/modules/Dto/produto.dto';
import { Repository } from 'typeorm';
import { Produtos } from './produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produtos>,
  ) {}

  async adicionarProduto(produtoDto: ProdutoDto, userInfo: any) {
    this.produtosRepository.save(
      {
        ...produtoDto,
        user: [
          {
            id: userInfo.id
          }
        ]
      }
      );
  }
}
