import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { usuarioProdutoProviders } from './usuarioProduto.provider';
import { UsuarioProdutoService } from './usuarioProduto.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...usuarioProdutoProviders,
    UsuarioProdutoService,
  ],
  exports: [UsuarioProdutoService],
})
export class UsuarioProdutoModule {}