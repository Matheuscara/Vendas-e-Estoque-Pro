import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { usuarioProviders } from './usuarioProduto.provider';
import { UsuarioProdutoService } from './usuarioProduto.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usuarioProviders,
    UsuarioProdutoService,
  ],
  exports: [UsuarioProdutoService],
})
export class UsuarioProdutoModule {}