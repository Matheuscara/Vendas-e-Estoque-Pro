import { IsNotEmpty, IsEmail } from 'class-validator';

export class loginUsuarioDto {
  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  senha: string;
}
