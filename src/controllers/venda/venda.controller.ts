import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
  Param,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiParam, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from 'src/database/usuario/usuario.service';
import { UsuarioDto } from 'src/modules/Dto/Usuario.dto';
import { loginUsuarioDto } from 'src/modules/Dto/loginUsuario.dto';
import { UserRoleGuard } from 'src/auth/user.role.guard';
import { VendaService } from 'src/database/vendas/venda.service';
import { VendaDto } from 'src/modules/Dto/venda.dto';
import path from 'path';

@Controller('/venda')
@ApiTags('Venda')
export class vendaController {
  constructor(private vendaService: VendaService) {}

  @ApiBearerAuth()
  @Get('/consulta')
  @UseGuards(UserRoleGuard)
  consultaVendas(@Req() req) {
    return this.vendaService.getVenda(req.user.id);
  }

  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Get('/pedidos/consulta/:idVenda')
  @ApiParam({
    name: 'idVenda',
    required: true,
    description:
      'Id da venda que deseja buscar todos os pedidos de produtos',
  })
  @UseGuards(UserRoleGuard)
  consultaPedidos(@Req() req, @Param() params) {
    return this.vendaService.getPedidos(req.user.id, params.idVenda);
  }

  @ApiBody({
    type: VendaDto,
    description: '',
    examples: {
      Usuario: {
        summary: 'Venda',
        description: 'Adiciona uma venda seu usuario',
        value: {
          data: new Date(),
          precoTotal: 12,
          formaPagamento: 'AVista',
          produtos: [{ produtoID: 2, quantidade: 1 }],
          status: 'Pendente',
        } as VendaDto,
      },
    },
  })
  @ApiBearerAuth()
  @UsePipes(new ValidationPipe())
  @Post('/cria')
  @UseGuards(UserRoleGuard)
  adicionaVenda(@Req() req, @Body() vendaDto: VendaDto) {
    return this.vendaService.adicionarVenda(req.user.id, vendaDto);
  }
}
