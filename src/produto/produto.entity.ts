import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Produto")

export class Produto {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'Nome', type: 'varchar' })
    nome: string;

    @Column({ name: 'Descricao', type: 'varchar' })
    descricao: string;

    @Column({ name: 'Preco', type: 'varchar' })
    preco: string;

    @Column({ name: 'Estoque', type: 'varchar' })
    estoque: string;

    @Column({ name: 'Data de Validade', type: 'varchar' })
    dataValidade: string;

    @Column({ name: 'Unidade de Medida', type: 'varchar' })
    unidadeMedida: string;

    // @Column({ name: 'Imagem', type:''})
    // imagem: ;
}