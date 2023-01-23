import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { produtoProviders } from './produto.provider';
import { ProdutosService } from './usuario.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...produtoProviders,
    ProdutosService,
  ],
  exports: [ProdutosService],
})
export class produtoModule {}