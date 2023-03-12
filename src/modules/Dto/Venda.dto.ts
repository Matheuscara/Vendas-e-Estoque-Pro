import { IsNotEmpty, IsISO8601, IsIn } from 'class-validator';

export class VendaDto {
    id: number;
  
    @IsNotEmpty()
    @IsISO8601()
    data: Date;

    @IsNotEmpty()
    quantidade: number;
  
    @IsNotEmpty()
    precoTotal: number;

    @IsNotEmpty()
    produto: number;
  
    @IsNotEmpty()
    @IsIn(['AVista', 'APrazo'])
    formaPagamento: string;
  
    @IsNotEmpty()
    @IsIn(['Pendente', 'Completa'])
    status: string;
}
