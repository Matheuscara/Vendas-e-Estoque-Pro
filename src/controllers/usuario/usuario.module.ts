import { Module } from '@nestjs/common';
import { usuarioModule } from 'src/database/usuario/usuario.module';
import { usuarioController } from './usuario.controller';

@Module({
  imports: [usuarioModule],
  controllers: [usuarioController],
})
export class UsuariosModule {}
