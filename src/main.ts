import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const options = new DocumentBuilder()
  .setTitle('estoquePro')
  .setDescription('Este projeto de gerenciamento de entradas e saídas de vendas é um sistema que permite controlar e gerenciar as transações comerciais de uma empresa, garantindo que as informações sobre vendas, estoque e fluxo de caixa sejam precisas e atualizadas em tempo real')
  .setVersion('1.0')
  .build();

  const document = SwaggerModule.createDocument(app, options);
  
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}
bootstrap();
