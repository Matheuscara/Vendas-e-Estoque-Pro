import { Controller, Get } from '@nestjs/common';
import { AppService } from './app.service';
import { ProdutosService } from './database/produtos/usuario.service';
import { UsuarioService } from './database/usuario/usuario.service';
import { UsuarioProdutoModule } from './database/usuarioProduto/usuarioProduto.module';
import { UsuarioProdutoService } from './database/usuarioProduto/usuarioProduto.service';

@Controller()
export class AppController {
  constructor(
    private readonly appService: AppService,
    private usuarioService: UsuarioService,
    private produtosService: ProdutosService,
    private usuarioProdutoModule: UsuarioProdutoService) {}

  @Get('/produtos')
  getProdutos(): any {
    return this.produtosService.findAll()
  }

  @Get('/usuarios')
  getUsuarios(): any {
    return this.usuarioService.findAll()
  }

  @Get('/usuario-produtos')
  getUsuariosProdutos(): any {
    return this.usuarioProdutoModule.findAll()
  }
}
