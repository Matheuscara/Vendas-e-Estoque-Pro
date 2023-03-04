import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UserRoleGuard } from 'src/auth/user.role.guard';
import { ProdutosService } from 'src/database/produtos/produto.service';
import { ProdutoDto } from 'src/modules/Dto/produto.dto';

@Controller('/produto')
@ApiTags('produto')
export class produtoController {
  constructor(private produtosService: ProdutosService) {}

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
          valorCompra: '2,30',
          valorVenda: '4,30',
          data_cadastro: new Date(),
        } as ProdutoDto,
      },
    },
  })
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post('/cria')
  @UseGuards(UserRoleGuard)
  criaUsuario(@Body() produtoDto: ProdutoDto, @Req() req): any {
    return this.produtosService.adicionarProduto(
      produtoDto,
      req.user,
    );
  }
}
