import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'mysql',
  host: process.env.HOST,
  port: Number(process.env.PORT_DB),
  username: process.env.USERNAME,
  password: process.env.PASSWORD_DATABASE,
  database: process.env.DATABASE,
  entities: [__dirname + '/../**/*.entity{.ts,.js}'],
  synchronize: true,
};
