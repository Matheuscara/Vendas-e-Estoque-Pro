import { DataSource } from 'typeorm';
import { produtos } from './produtos.entity';

export const produtoProviders = [
  {
    provide: 'PRODUTOS_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(produtos),
    inject: ['DATA_SOURCE'],
  },
];