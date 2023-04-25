import { Inject, NotFoundException } from '@nestjs/common';
import { Repository } from 'typeorm';
import { Venda } from './venda.entity';
import { Produtos } from '../produtos/produtos.entity';
import { Usuario } from '../usuario/usuario.entity';
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
    }

    const vendas = await this.vendaRepoditory.find({
      where: { usuario: user },
    });

    if (!vendas) {
      throw new NotFoundException('Nenhuma venda encontrada');
    }

    return vendas.map((venda: Venda) => {
      return {
        ...venda,
        usuario: {
          id: venda.usuario.id,
          nome: venda.usuario.nome,
          email: venda.usuario.email,
        },
      };
    });
  }

  async getPedidos(userID: number, id: number) {
    const user = await this.usuarioRepository.findOne({
      where: { id: userID },
    });

    if (!user) {
      throw new NotFoundException('Usuario nao encontrado');
    }

    const venda = await this.vendaRepoditory.findOne({
      where: { usuario: user, id: id },
    });

    if (!venda) {
      throw new NotFoundException('Nenhuma venda encontrada');
    }

    const pedidos = await this.pedidoRepoditory.find({
      where: { usuario: user, venda: venda },
    });

    if (!pedidos || pedidos.length === 0) {
      throw new NotFoundException('Nenhum pedido encontrado');
    }

    return pedidos.map((pedido: Pedido) => {
      return {
        quantidade: pedido.quantidade,
        produto: {
          ...pedido.produto,
        },
      };
    });
  }

  async adicionarVenda(userID: number, venda) {
    let pedidos = [];
    let produtosSemQuantidade = [];

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
      if (produto && produto.quantidade === 0) {
        produtosSemQuantidade.push({ nome: produto.nome, id: produto.id });
      } else if (produto && produto.quantidade < venda.produtos[index].quantidade) {
        produtosSemQuantidade.push({ nome: produto.nome, id: produto.id });
      } else if (produto) {
        let produtoSubtraido: Produtos = {
          ...produto,
          quantidade: produto.quantidade - venda.produtos[index].quantidade,
        };

        await this.produtosRepository.save({
          ...produto,
          ...produtoSubtraido,
        });
        pedidos.push({
          produto: produto,
          quantidade: venda.produtos[index].quantidade,
        });
      } else {
        throw new NotFoundException('Produto nao encontrado');
      }
    }

    if (produtosSemQuantidade.length !== 0) {
      throw new NotFoundException(
        `Produtos em falta - id: ${produtosSemQuantidade.map(
          (ob) => ob.id,
        )}`,
      );
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
