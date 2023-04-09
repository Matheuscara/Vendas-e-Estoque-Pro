import { IsNotEmpty, IsISO8601, IsIn } from 'class-validator';

export class VendaDto {
    id: number;
  
    @IsNotEmpty()
    @IsISO8601()
    data: Date;
  
    @IsNotEmpty()
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
