import { Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Venda } from './venda.entity';
import { Produtos } from '../produtos/produtos.entity';
import { Usuario } from '../usuario/usuario.entity';
import { VendaDto } from 'src/modules/Dto/venda.dto';
import { Pedido } from '../pedido/pedido.entity';

export class VendaService {
  constructor(
    @Inject('VENDA_REPOSITORY')
    private vendaRepoditory: Repository<Venda>,
    @Inject('PRODUTOS_REPOSITORY')
    private produtosRepository: Repository<Produtos>,
    @Inject('USUARIO_REPOSITORY')
    private usuarioRepository: Repository<Usuario>,
    @Inject('PEDIDO_REPOSITORY')
    private pedidoRepoditory: Repository<Pedido>,
  ) {}

  async getVenda(userID: number) {
    const user = await this.usuarioRepository.findOne({
      where: { id: userID },
    });

    if (!user) {
      throw new NotFoundException('Usuario nao encontrado');
    };

    const vendas = await this.vendaRepoditory.find({
      where: { usuario: user },
    });

    if (!vendas) {
      throw new NotFoundException('Nenhuma venda encontrada');
    };

    return vendas.map((venda: Venda) => {
      return {
        ...venda,
        usuario: {
          id: venda.usuario.id,
          nome: venda.usuario.nome,
          email: venda.usuario.email,
        }
      }
    })
  }

  async adicionarVenda(userID: number, venda: VendaDto) {
    let pedidos = [];

    const user = await this.usuarioRepository.findOne({
      where: { id: userID },
    });

    if (!user) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    for (let index = 0; index < venda.produtos.length; index++) {
      let produto = await this.produtosRepository.findOne({
        where: { id: venda.produtos[index].produtoID },
      });
      if (produto) {
        pedidos.push({
          produto: produto,
          quantidade: venda.produtos[index].quantidade,
        });
      } else {
        throw new NotFoundException('Produto nao encontrado');
      }
    }

    if (!user) {
      throw new NotFoundException('Usuario nao encontrado');
    } else if (pedidos.length === 0) {
      throw new NotFoundException('Produto nao encontrado');
    }

    const sale = new Venda();
    sale.data = venda.data;
    sale.usuario = user;
    sale.formaPagamento = venda.formaPagamento;
    sale.status = venda.status;
    sale.precoTotal = venda.precoTotal;
    sale.pedidos = pedidos.map((pedido: Pedido) => {
      return {
        produto: pedido.produto,
        quantidade: pedido.quantidade,
        venda: sale,
        usuario: user,
      };
    }) as Pedido[];

    await this.vendaRepoditory.save(sale);
  }
}
