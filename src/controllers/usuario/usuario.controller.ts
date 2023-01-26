import { Body, Controller, Get, NotFoundException, Param, Post, UsePipes, ValidationPipe } from "@nestjs/common"
import { ApiBody, ApiTags } from "@nestjs/swagger"
import { UsuarioService } from "src/database/usuario/usuario.service"
import { UsuarioDto } from "src/modules/Dto/Usuario.dto"

@Controller('/usuario')
@ApiTags('Usuario')
export class usuarioController {
  constructor(private usuarioService: UsuarioService) {}

  @Get('/consulta')
  getUsuarios(): any {
    return this.usuarioService.findAll();
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

  @Get('/consulta/:id')
  consultaUsuarioId(@Param('id') id: string) {
    return this.usuarioService.buscaUsuarioId(id);
  }
}
