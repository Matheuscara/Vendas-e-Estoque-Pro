import { Repository } from 'typeorm';
import { produtos } from './produtos.entity';
export declare class ProdutosService {
    private produtosRepository;
    constructor(produtosRepository: Repository<produtos>);
    findAll(): Promise<produtos[]>;
}
