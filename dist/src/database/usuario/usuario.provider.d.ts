import { DataSource } from 'typeorm';
import { usuario } from './usuario.entity';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<usuario>;
    inject: string[];
}[];
