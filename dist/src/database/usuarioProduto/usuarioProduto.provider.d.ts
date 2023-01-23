import { DataSource } from 'typeorm';
import { relacionamento_usuario_produto } from './relacionamento_usuarios_produtos.entity';
export declare const usuarioProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<relacionamento_usuario_produto>;
    inject: string[];
}[];
