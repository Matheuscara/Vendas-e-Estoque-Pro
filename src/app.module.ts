import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { usuarioModule } from './database/usuario/usuario.module';
import { produtoModule } from './database/produtos/produto.module';
import { UsuarioProdutoModule } from './database/usuarioProduto/usuarioProduto.module';

@Module({
  imports: [
    SwaggerModule,
    DocumentBuilder,
    usuarioModule,
    produtoModule,
    UsuarioProdutoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
