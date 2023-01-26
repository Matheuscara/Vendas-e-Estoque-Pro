import { IsNotEmpty, IsISO8601 } from 'class-validator';

export class ProdutoDto {
  id: number;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  categoria: string;

  @IsNotEmpty()
  quantidade: number;

  @IsNotEmpty()
  qtdMinima: number;

  @IsNotEmpty()
  valorCompra: string;

  @IsNotEmpty()
  valorVenda: string;

  @IsNotEmpty()
  @IsISO8601()
  data_cadastro: Date;

  user?: any;
}
