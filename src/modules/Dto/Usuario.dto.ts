import { IsEmail, IsNotEmpty, IsISO8601, IsIn } from 'class-validator';

export class UsuarioDto {
  id: number;

  @IsNotEmpty()
  nome: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;

  @IsNotEmpty()
  @IsIn(['admin', 'usuario'])
  permissao: string;

  @IsNotEmpty()
  @IsISO8601()
  data_cadastro: Date;
}