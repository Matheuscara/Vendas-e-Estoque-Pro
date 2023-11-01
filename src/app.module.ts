import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { AppService } from './app.service';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { UsuariosModule } from './controllers/usuario/usuario.module';
import { produtosModule } from './controllers/produto/produto.module';
import { VendasModule } from './controllers/venda/venda.module';
import { DatabaseModule } from './database/database.module';
import { ConfigModule } from '@nestjs/config';
import { Logger } from './log/logger';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { ResponseInterceptor } from './utils/responseInterceptor';
import { CorrelationIdMiddlewareLog } from './Middleware/correlationMiddlewareLog';

@Module({
  imports: [
    DatabaseModule,
    SwaggerModule,
    DocumentBuilder,
    UsuariosModule,
    produtosModule,
    VendasModule,
    ConfigModule.forRoot({
      isGlobal: true,
    }),
  ],
  providers: [
    AppService,
    Logger,
    {
      provide: APP_INTERCEPTOR,
      useClass: ResponseInterceptor,
    },
  ],
  exports: [Logger],
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(CorrelationIdMiddlewareLog)
      .forRoutes('*');
  }
}
