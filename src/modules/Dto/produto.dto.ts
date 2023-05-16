import { IsNotEmpty, IsISO8601, Min, IsString, MaxLength, MinLength, Max, IsPositive } from 'class-validator';

export class ProdutoDto {
  id: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  nome: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  categoria: string;

  @IsNotEmpty()
  @Min(0)
  @Max(99999999)
  quantidade: number;

  @IsNotEmpty()
  @Min(0)
  @Max(99999999)
  qtdMinima: number;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(12)
  valorCompra: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(4)
  @MaxLength(12)
  valorVenda: string;

  @IsNotEmpty()
  @IsISO8601()
  data_cadastro: Date;

  user?: any;
}
