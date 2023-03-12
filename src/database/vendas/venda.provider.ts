import { DataSource } from 'typeorm';
import { Venda } from './venda.entity';

export const vendaProviders = [
  {
    provide: 'VENDA_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(Venda),
    inject: ['DATA_SOURCE'],
  },
];