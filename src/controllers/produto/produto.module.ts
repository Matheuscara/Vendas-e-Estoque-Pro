import { Module } from '@nestjs/common';
import { produtoModule } from 'src/database/produtos/produto.module';
import { UsuarioProdutoModule } from 'src/database/usuarioProduto/usuarioProduto.module';
import { produtoController } from './produto.controller';

@Module({
  imports: [produtoModule, UsuarioProdutoModule],
  controllers: [produtoController],
})
export class produtosModule {}
