import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: 'localhost',
  port: Number(process.env.PASSWORD_DATABASE),
  username: process.env.USERNAME,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.DATABASE,
  entities: [
        "src/modules/*.entity.{ts,js}"
    ],
  synchronize: true,
};