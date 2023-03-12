import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';
import { Venda } from '../vendas/venda.entity';

@Entity()
export class Produtos {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nome: string;

  @Column()
  categoria: string;

  @Column()
  quantidade: number;

  @Column()
  qtdMinima: number;

  @Column()
  valorCompra: string;

  @Column()
  valorVenda: string;

  @Column()
  data_cadastro: Date;

  @ManyToMany((type) => Usuario, (user) => user.produtos)
  user: Usuario[];

  @OneToMany(() => Venda, sale => sale.produto)
  sales: Venda[];
}