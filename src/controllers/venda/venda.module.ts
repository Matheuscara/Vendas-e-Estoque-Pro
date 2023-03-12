import { Module } from '@nestjs/common';
import { vendaController } from './venda.controller';
import { vendaModule } from 'src/database/vendas/venda.module';
import { produtoModule } from 'src/database/produtos/produto.module';

@Module({
  imports: [vendaModule],
  controllers: [vendaController],
})
export class VendasModule {}
