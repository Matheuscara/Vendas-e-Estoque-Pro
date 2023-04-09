import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { pedidoProviders } from './pedido.provider';
import { PedidoService } from './pedido.service';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...pedidoProviders,
    PedidoService,
  ],
  exports: [PedidoService],
})
export class pedidoModule {}