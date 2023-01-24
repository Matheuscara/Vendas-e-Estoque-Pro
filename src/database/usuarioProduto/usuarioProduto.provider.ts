import { DataSource } from 'typeorm';
import { usuario_ref_produto } from './relacionamento_usuarios_produtos.entity';

export const usuarioProdutoProviders = [
  {
    provide: 'USUARIO_PRODUTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(usuario_ref_produto),
    inject: ['DATA_SOURCE'],
  },
];