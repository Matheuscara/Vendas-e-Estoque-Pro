import { Column, Entity, JoinColumn, JoinTable, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../produtos/produtos.entity';
import { Venda } from '../vendas/venda.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity()
export class Pedido {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => Venda, venda => venda.pedidos, { eager: true })
  @JoinColumn({ name: 'id_venda' })
  venda: Venda;

  @ManyToOne(() => Produtos, produto => produto.pedido, { eager: true })
  @JoinColumn({ name: 'id_produto' })
  produto: Produtos;

  @ManyToOne(() => Usuario, user => user.usuarioPedido, { eager: true })
  @JoinColumn({ name: 'id_usuario' })
  usuario: Usuario;

  @Column()
  quantidade: number
}