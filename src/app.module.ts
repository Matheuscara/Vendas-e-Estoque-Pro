import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsuariosModule } from './controllers/usuario/usuario.module';
import { produtosModule } from './controllers/produto/produto.module';

@Module({
  imports: [SwaggerModule, DocumentBuilder, UsuariosModule, produtosModule],
  providers: [AppService],
})
export class AppModule {}
