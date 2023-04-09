import { Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Pedido } from './pedido.entity';

export class PedidoService {
  constructor(
    @Inject('PEDIDO_REPOSITORY')
    private pedidoRepoditory: Repository<Pedido>,
  ) {}
}
