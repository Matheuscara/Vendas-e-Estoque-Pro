import { Injectable, Inject } from '@nestjs/common';
import { Console } from 'console';
import { ProdutoDto } from 'src/modules/Dto/produto.dto';
import { Repository } from 'typeorm';
import { Produtos } from './produtos.entity';
const jwt = require('jsonwebtoken');

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produtos>,
  ) {}

  async adicionarProduto(produtoDto: ProdutoDto, token: string) {

    const tokenInfo = await jwt.verify(token.split(' ')[1], process.env.SECRET_TOKEN_JWT);

    this.produtosRepository.save(
      {
        ...produtoDto,
        user: [
          {
            id: tokenInfo.id
          }
        ]
      }
      );
  }
}
