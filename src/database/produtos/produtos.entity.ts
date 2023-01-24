import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';
import { usuario_ref_produto } from '../usuarioProduto/relacionamento_usuarios_produtos.entity';

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
  valorCompra: number;

  @Column()
  valorVenda: number;

  @Column()
  data_cadastro: Date;

  @OneToMany(() => usuario_ref_produto, usuario_ref_produto => usuario_ref_produto.produto_)
  id_: usuario_ref_produto;
}