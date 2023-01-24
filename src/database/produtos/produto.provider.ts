import { DataSource } from 'typeorm';
import { Produtos } from './produtos.entity';

export const produtoProviders = [
  {
    provide: 'PRODUTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Produtos),
    inject: ['DATA_SOURCE'],
  },
];