import { typeOrmConfig } from 'ormconfig';
import { DataSource, DataSourceOptions } from 'typeorm';

export const databaseProviders = [
  {
    provide: 'DATA_SOURCE',
    useFactory: async () => {
      const dataSource = new DataSource({
        type: 'mysql',
        host: 'databasetest.ci8c3vlgobdu.us-east-2.rds.amazonaws.com',
        port: 3306,
        username: 'admin',
        password: '21082000',
        database: 'estoquepro',
        entities: [__dirname + '/../**/*.entity{.ts,.js}'],
        synchronize: true,
      });

      return dataSource.initialize();
    },
  },
];