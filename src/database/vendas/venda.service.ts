import { Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Venda } from './venda.entity';
import { Produtos } from '../produtos/produtos.entity';
import { Usuario } from '../usuario/usuario.entity';
import { VendaDto } from 'src/modules/Dto/venda.dto';

export class VendaService {
  constructor(
    @Inject('VENDA_REPOSITORY')
    private vendaRepoditory: Repository<Venda>,
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produtos>,
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
  ) {}

  async produtosUsuario(userID: number) {
    const query = await this.vendaRepoditory
    .createQueryBuilder('venda')
    .leftJoinAndSelect('venda.usuario', 'usuario')
    .leftJoinAndSelect('venda.produto', 'produto')
    .where('usuario.id = :userId', { userId: userID });

   const vendas = await query.getMany();

   if(vendas.length === 0) {
    throw new NotFoundException('Vendas nao encontradas');
   } else {
    return vendas
   }
  }

 async adicionarVenda(userID: number, venda: VendaDto) {
  const user = await this.usuarioRepository.findOne({ where: { id: userID }});
  const product = await this.produtosRepository.findOne({ where: { id: venda.produto }});

  if(!product) {
    throw new NotFoundException('Produto nao encontrado');
  } else if (!user) {
    throw new NotFoundException('Usuario nao encontrado');
  }

  const sale = new Venda();  
  sale.data = venda.data;
  sale.usuario = user;
  sale.produto = product;
  sale.quantidade = venda.quantidade
  sale.formaPagamento = venda.formaPagamento
  sale.status = venda.status
  sale.precoTotal = venda.precoTotal;


  await this.vendaRepoditory.save(sale);
 }
}
