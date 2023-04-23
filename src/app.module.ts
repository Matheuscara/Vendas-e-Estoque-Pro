import { Module } from '@nestjs/common';
import { AppService } from './app.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsuariosModule } from './controllers/usuario/usuario.module';
import { produtosModule } from './controllers/produto/produto.module';
import { VendasModule } from './controllers/venda/venda.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';

@Module({
  imports: [
    DatabaseModule,
    SwaggerModule,
    DocumentBuilder,
    UsuariosModule,
    produtosModule,
    VendasModule,
    ConfigModule.forRoot(),
  ],
  providers: [AppService],
})
export class AppModule {}
