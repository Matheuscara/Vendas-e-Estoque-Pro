import { IsNotEmpty, IsEmail, IsString, MinLength, MaxLength } from 'class-validator';

export class loginUsuarioDto {
  @IsNotEmpty()
  @IsEmail()
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  email: string;

  @IsNotEmpty()
  @IsString()
  @MinLength(1)
  @MaxLength(30)
  senha: string;
}
