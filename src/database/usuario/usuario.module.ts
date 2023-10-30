import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { usuarioProviders } from './usuario.provider';
import { UsuarioService } from './usuario.service';

@Module({
  imports: [DatabaseModule],
  providers: [...usuarioProviders, UsuarioService],
  exports: [UsuarioService],
})
export class usuarioModule {}
