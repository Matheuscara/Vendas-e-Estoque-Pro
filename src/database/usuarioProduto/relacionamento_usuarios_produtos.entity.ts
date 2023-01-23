import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from 'typeorm';
import { produtos } from '../produtos/produtos.entity';
import { usuario } from '../usuario/usuario.entity';

@Entity()
export class relacionamento_usuario_produto {
  @PrimaryGeneratedColumn()
  idrelacionamento_usuarios_produtos: number;

  @ManyToMany(type => usuario, (usuarios) => usuarios.teste )
  @JoinTable()
  usuarios: usuario[];

  // @ManyToMany(type => produtos, produtos => produtos.produtoRelacao)
  // @JoinColumn()
  // id_produto: produtos;

  @Column()
  data_operacao: Date;

  @Column()
  tipo_operacao: string;
}