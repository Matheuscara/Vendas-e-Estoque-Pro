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

  async findAll(): Promise<Produtos[]> {
    return this.produtosRepository.find();
  }

  async adicionarProduto(produtoDto: ProdutoDto) {
    const novoProduto = this.produtosRepository.create(produtoDto);

    try {
      this.produtosRepository.save(novoProduto);
    } catch (err) {
      console.log(err);
    }
  }
}
