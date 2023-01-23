import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: 3306,
  username: 'root',
  password: 'Mat748596123',
  database: 'estoquepro',
  entities: [
        "src/modules/*.entity.{ts,js}"
    ],
  synchronize: true,
};