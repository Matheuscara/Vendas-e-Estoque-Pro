import { Body, Controller, Get, Post } from "@nestjs/common"
import { ApiBody, ApiTags } from "@nestjs/swagger"
import { ProdutosService } from "src/database/produtos/usuario.service"
import { ProdutoDto } from "src/modules/Dto/produto.dto"

@Controller('/produto')
@ApiTags('produto')
export class produtoController {
  constructor(private produtosService: ProdutosService) {}

  @Get('/produtos')
  getProdutos(): any {
    return this.produtosService.findAll();
  }

  @ApiBody({
    type: ProdutoDto,
    description: '',
    examples: {
      Usuario: {
        summary: 'Produro',
        description: 'Adiciona um produto no banco de dados',
        value: {
          nome: 'Nome de teste',
          categoria: 'lata',
          quantidade: 2,
          qtdMinima: 3,
          valorCompra: 2,
          valorVenda: 3,
          data_cadastro: new Date(),
          user: [
            {
              id: 1,
            },
          ],
        } as ProdutoDto,
      },
    },
  })
  @Post('/cria')
  criaUsuario(@Body() produtoDto: ProdutoDto): any {
    return this.produtosService.adicionarProduto(produtoDto);
  }
}
