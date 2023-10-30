import { DataSource } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: process.env.DATABASE_HOST,
        username: process.env.DATABASE_USERNAME,
        password: process.env.DATABASE_PASSWORD,
        database: process.env.DATABASE_NAME,
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        // ssl: {
        //   rejectUnauthorized: true
        // } // COMANDO PARA RODAR EM SSL NUVEM
        synchronize: true // COMANDO PARA ATUALIZAR TABELAS AUTOMATICAMENTE
      });

      return dataSource.initialize();
    },
  },
];