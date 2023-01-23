import { DataSource } from 'typeorm';
import { usuario } from './usuario.entity';

export const usuarioProviders = [
  {
    provide: 'USUARIO_REPOSITORY',
    useFactory: (dataSource: DataSource) => dataSource.getRepository(usuario),
    inject: ['DATA_SOURCE'],
  },
];