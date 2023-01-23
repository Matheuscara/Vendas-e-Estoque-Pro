import { relacionamento_usuario_produto } from 'src/database/usuarioProduto/relacionamento_usuarios_produtos.entity';
import { Column, Entity, ManyToMany, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class usuario {
  @PrimaryGeneratedColumn()
  idusuarios: number;

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

  @ManyToMany(type => relacionamento_usuario_produto, teste => teste.usuarios)
  teste: usuario[];
}