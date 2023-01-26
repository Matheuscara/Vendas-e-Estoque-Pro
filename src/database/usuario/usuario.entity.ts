import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../produtos/produtos.entity';

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
}