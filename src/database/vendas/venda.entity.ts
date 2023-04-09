import { Column, Entity, JoinColumn, JoinTable, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Pedido } from '../pedido/pedido.entity';

@Entity()
export class Venda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @ManyToOne(() => Usuario, user => user.sales, { eager: true })
  usuario: Usuario;

  @ManyToMany(() => Pedido, (pedido) => pedido.venda, { cascade: true })
  @JoinTable()
  pedidos: Pedido[]
  
  @Column()
  precoTotal: number;

  @Column()
  formaPagamento: string;

  @Column()
  status: string;
}