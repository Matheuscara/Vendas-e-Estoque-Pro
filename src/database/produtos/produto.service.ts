import { Injectable, Inject } from '@nestjs/common';
import { Console } from 'console';
import { ProdutoDto } from 'src/modules/Dto/produto.dto';
import { Repository } from 'typeorm';
import { Produtos } from './produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produtos>,
  ) {}

  async findAll(): Promise<Produtos[]> {
    return this.produtosRepository.find();
  }

  async adicionarProduto(produtoDto: ProdutoDto) {
    this.produtosRepository.save(produtoDto);
  }
}
