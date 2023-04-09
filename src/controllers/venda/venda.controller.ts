import {
  Body,
  Controller,
  Get,
  Post,
  UsePipes,
  ValidationPipe,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from 'src/database/usuario/usuario.service';
import { UsuarioDto } from 'src/modules/Dto/Usuario.dto';
import { loginUsuarioDto } from 'src/modules/Dto/loginUsuario.dto';
import { UserRoleGuard } from 'src/auth/user.role.guard';
import { VendaService } from 'src/database/vendas/venda.service';
import { VendaDto } from 'src/modules/Dto/venda.dto';

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
          status: 'Pendente'
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
