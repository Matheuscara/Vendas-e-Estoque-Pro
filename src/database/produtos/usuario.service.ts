import { Injectable, Inject } from '@nestjs/common';
import { Repository } from 'typeorm';
import { produtos } from './produtos.entity';

@Injectable()
export class ProdutosService {
  constructor(
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<produtos>,
  ) {}

  async findAll(): Promise<produtos[]> {
    return this.produtosRepository.find();
  }
}