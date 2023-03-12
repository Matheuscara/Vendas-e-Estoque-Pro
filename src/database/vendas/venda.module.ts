import { Module } from '@nestjs/common';
import { DatabaseModule } from '../database.module';
import { vendaProviders } from './venda.provider';
import { VendaService } from './venda.service';
import { ProdutosService } from '../produtos/produto.service';
import { produtoProviders } from '../produtos/produto.provider';
import { usuarioProviders } from '../usuario/usuario.provider';

@Module({
  imports: [DatabaseModule],
  providers: [
    ...vendaProviders,
    ...produtoProviders,
    ...usuarioProviders,
    VendaService,
  ],
  exports: [VendaService],
})
export class vendaModule {}