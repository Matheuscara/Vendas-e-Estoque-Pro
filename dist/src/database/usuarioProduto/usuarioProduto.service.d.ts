import { Repository } from 'typeorm';
import { relacionamento_usuario_produto } from './relacionamento_usuarios_produtos.entity';
export declare class UsuarioProdutoService {
    private usuarioProdutoRepository;
    constructor(usuarioProdutoRepository: Repository<relacionamento_usuario_produto>);
    findAll(): Promise<relacionamento_usuario_produto[]>;
}
