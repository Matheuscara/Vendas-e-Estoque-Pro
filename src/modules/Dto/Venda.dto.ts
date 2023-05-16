import { IsNotEmpty, IsISO8601, IsIn, Min, Max } from 'class-validator';

export class VendaDto {
    id: number;
  
    @IsNotEmpty()
    @IsISO8601()
    data: Date;
  
    @IsNotEmpty()
    @Min(0)
    @Max(99999999)
    precoTotal: number;

    @IsNotEmpty()
    produtos: { produtoID: number, quantidade: number }[];
  
    @IsNotEmpty()
    @IsIn(['AVista', 'APrazo'])
    formaPagamento: string;
  
    @IsNotEmpty()
    @IsIn(['Pendente', 'Completa'])
    status: string;
}
