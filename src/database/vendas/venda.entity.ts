import { Column, Entity, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../produtos/produtos.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity()
export class Venda {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data: Date;

  @ManyToOne(() => Usuario, user => user.sales)
  usuario: Usuario;

  @ManyToOne(() => Produtos, product => product.sales)
  produto: Produtos;

  @Column()
  quantidade: number;

  @Column()
  precoTotal: number;

  @Column()
  formaPagamento: string;

  @Column()
  status: string;
}