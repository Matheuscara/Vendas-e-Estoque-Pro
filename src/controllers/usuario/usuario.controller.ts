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

@Controller('/usuario')
@ApiTags('Usuario')
export class usuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @ApiBearerAuth()
  @Get('/consulta/token')
  @UseGuards(UserRoleGuard)
  validaToken(@Req() req) {
    return this.usuarioService.validaToken(req.user);
  }

  @ApiBearerAuth()
  @Get('/consulta/produtos')
  @UseGuards(UserRoleGuard)
  consultaUsuarioId(@Req() req) {
    return this.usuarioService.buscaProdutosId(req.user);
  }

  @ApiBody({
    type: loginUsuarioDto,
    description: '',
    examples: {
      Usuario: {
        summary: 'Usuario',
        description: 'Login Usuario',
        value: {
          email: 'email@email.com',
          senha: 'teste',
        } as loginUsuarioDto,
      },
    },
  })
  @UsePipes(new ValidationPipe())
  @Post('/login')
  async loginUsuario(@Body() loginUsuarioDto: loginUsuarioDto) {
    return await this.usuarioService.login(loginUsuarioDto);
  }

  @ApiBody({
    type: UsuarioDto,
    description: '',
    examples: {
      Usuario: {
        summary: 'Usuario',
        description: 'Adiciona um usuario no banco de dados',
        value: { 
          nome: 'Nome de teste',
          email: 'email@email.com',
          permissao: 'usuario',
          senha: 'teste',
          data_cadastro: new Date(),
        } as UsuarioDto,
      },
    },
  })
  @UsePipes(new ValidationPipe())
  @Post('/cria')
  criaUsuario(@Body() usuarioDto: UsuarioDto, @Req() {traceId}): any {
    return this.usuarioService.adicionarUsuario(usuarioDto, traceId);
  }
}
