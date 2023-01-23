import { DataSource } from 'typeorm';
import { produtos } from './produtos.entity';
export declare const produtoProviders: {
    provide: string;
    useFactory: (dataSource: DataSource) => import("typeorm").Repository<produtos>;
    inject: string[];
}[];
