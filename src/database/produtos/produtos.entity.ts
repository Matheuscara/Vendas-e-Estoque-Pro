import { relacionamento_usuario_produto } from 'src/database/usuarioProduto/relacionamento_usuarios_produtos.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class produtos {
  @PrimaryGeneratedColumn()
  idprodutos: number;

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

  // @OneToMany(type => relacionamento_usuario_produto, usuarioProdutoRelation => usuarioProdutoRelation.id_produto)
  //   produtoRelacao: relacionamento_usuario_produto[];
}