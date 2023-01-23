import { AppService } from './app.service';
import { ProdutosService } from './database/produtos/usuario.service';
import { UsuarioService } from './database/usuario/usuario.service';
import { UsuarioProdutoService } from './database/usuarioProduto/usuarioProduto.service';
export declare class AppController {
    private readonly appService;
    private usuarioService;
    private produtosService;
    private usuarioProdutoModule;
    constructor(appService: AppService, usuarioService: UsuarioService, produtosService: ProdutosService, usuarioProdutoModule: UsuarioProdutoService);
    getProdutos(): any;
    getUsuarios(): any;
    getUsuariosProdutos(): any;
}
