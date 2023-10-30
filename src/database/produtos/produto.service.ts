import { Injectable, Inject, HttpException, HttpStatus } from '@nestjs/common';
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

    const produtoExistente = await this.produtosRepository.findOne({
      where: {
        nome: produtoDto.nome,
      },
    });

    if(produtoExistente) {
      throw new HttpException('Produto duplicado', HttpStatus.CONFLICT);
    }

    await this.produtosRepository.save(
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

  async consultaProsutosUsuario(userInfo: any) {
    const produtos = await this.produtosRepository.findBy({
      user: userInfo.id
    });

    if(!produtos) {
      throw new HttpException('Produtos nao encontrados', HttpStatus.NOT_FOUND);
    }

    return produtos
  }
}
