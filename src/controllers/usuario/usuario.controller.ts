import {
  Body,
  Controller,
  Get,
  Param,
  Post,
  UsePipes,
  ValidationPipe,
  Headers,
} from '@nestjs/common';
import { ApiBearerAuth, ApiBody, ApiTags } from '@nestjs/swagger';
import { UsuarioService } from 'src/database/usuario/usuario.service';
import { UsuarioDto } from 'src/modules/Dto/Usuario.dto';
import { loginUsuarioDto } from 'src/modules/Dto/loginUsuario.dto';
import { validaToken } from 'src/utils/tokenJWT';

@ApiBearerAuth()
@Controller('/usuario')
@ApiTags('Usuario')
export class usuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get('/consulta')
  getUsuarios(@Headers() headers): any {
    return validaToken(headers.authorization, this.usuarioService.findAll());
  }

  @Get('/consulta/:id')
  consultaUsuarioId(@Param('id') id: string, @Headers() headers) {
    return validaToken(
      headers.authorization,
      this.usuarioService.buscaUsuarioId(id),
    );
  }

  @ApiBody({
    type: loginUsuarioDto,
    description: '',
    examples: {
      Usuario: {
        summary: 'Usuario',
        description: 'Login Usuario',
        value: {
          email: 'teste@gmail.com',
          senha: '12345',
        } as loginUsuarioDto,
      },
    },
  })
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
          permissao: 'Usuario',
          senha: 'teste',
          data_cadastro: new Date(),
        } as UsuarioDto,
      },
    },
  })
  @UsePipes(new ValidationPipe())
  @Post('/cria')
  criaUsuario(@Body() usuarioDto: UsuarioDto): any {
    return this.usuarioService.adicionarUsuario(usuarioDto);
  }
}
