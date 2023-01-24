import { usuario_ref_produto } from 'src/database/usuarioProduto/relacionamento_usuarios_produtos.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

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

  @OneToMany(() => usuario_ref_produto, usuario_ref_produto => usuario_ref_produto.usuario_)
  id_?: usuario_ref_produto;
}