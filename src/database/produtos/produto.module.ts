import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { produtoProviders } from './produto.provider';
import { ProdutosService } from './produto.service';

@Module({
  imports: [DatabaseModule],
  providers: [...produtoProviders, ProdutosService],
  exports: [ProdutosService],
})
export class produtoModule {}
