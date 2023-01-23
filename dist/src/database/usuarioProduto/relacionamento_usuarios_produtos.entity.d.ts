import { usuario } from '../usuario/usuario.entity';
export declare class relacionamento_usuario_produto {
    idrelacionamento_usuarios_produtos: number;
    usuarios: usuario[];
    data_operacao: Date;
    tipo_operacao: string;
}
