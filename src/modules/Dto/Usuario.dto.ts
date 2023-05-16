import { IsEmail, IsNotEmpty, IsISO8601, IsIn, IsString, MinLength, MaxLength } from 'class-validator';

export class UsuarioDto {
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
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  senha: string;

  @IsNotEmpty()
  @IsIn(['admin', 'usuario'])
  permissao: string;

  @IsNotEmpty()
  @IsISO8601()
  data_cadastro: Date;
}