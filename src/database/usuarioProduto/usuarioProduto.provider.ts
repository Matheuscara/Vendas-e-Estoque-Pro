import { DataSource } from 'typeorm';
import { relacionamento_usuario_produto } from './relacionamento_usuarios_produtos.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_PRODUTO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(relacionamento_usuario_produto),
    inject: ['DATA_SOURCE'],
  },
];