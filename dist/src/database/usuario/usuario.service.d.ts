import { Repository } from 'typeorm';
import { usuario } from './usuario.entity';
export declare class UsuarioService {
    private usuarioRepository;
    constructor(usuarioRepository: Repository<usuario>);
    findAll(): Promise<usuario[]>;
}
