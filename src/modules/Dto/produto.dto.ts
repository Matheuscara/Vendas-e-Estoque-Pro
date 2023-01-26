import { Usuario } from 'src/database/usuario/usuario.entity';

export class ProdutoDto {
  id: number;

  nome: string;

  categoria: string;

  quantidade: number;

  qtdMinima: number;

  valorCompra: number;

  valorVenda: number;

  data_cadastro: Date;

  user: any
}
