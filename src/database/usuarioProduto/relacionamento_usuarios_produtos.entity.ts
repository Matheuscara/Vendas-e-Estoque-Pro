import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import { Produtos } from '../produtos/produtos.entity';
import { Usuario } from '../usuario/usuario.entity';

@Entity()
export class usuario_ref_produto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  data_operacao: Date;

  @Column()
  tipo_operacao: string;

  @ManyToOne(() => Usuario, (usuarios) => usuarios.id_)
  usuario_ = Number;

  @ManyToOne(() => Produtos, (produtos) => produtos.id_)
  produto_ = Number;
}