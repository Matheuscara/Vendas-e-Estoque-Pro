import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { Usuario } from '../usuario/usuario.entity';

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
}