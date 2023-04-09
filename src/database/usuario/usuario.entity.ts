import { Column, Entity, JoinTable, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../produtos/produtos.entity';
import { Venda } from '../vendas/venda.entity';
import { Pedido } from '../pedido/pedido.entity';

@Entity()
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  email: string;

  @Column()
  senha: string;

  @Column()
  permissao: string;

  @Column()
  data_cadastro: Date;

  @ManyToMany((type) => Produtos, (produto) => produto.user, { eager: true })
  @JoinTable()
  produtos: Produtos[];

  @OneToMany(() => Venda, sale => sale.usuario)
  sales: Venda[];

  @OneToMany(() => Pedido, (pedido) => pedido.usuario)
  usuarioPedido
}