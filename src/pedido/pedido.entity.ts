import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Pedido")

export class Pedido {

    @PrimaryGeneratedColumn()
    id: number;

    @Column({ name: 'Codigo', type: 'varchar' })
    codigo: string;

    @Column({ name: 'Data', type: 'varchar' })
    data: string;

    @Column({ name: 'Data de Entrega Prevista', type: 'varchar' })
    dataEntregaPrevista: string;

    @Column({ name: 'Transportadora', type: 'varchar' })
    transportadora: string;

    @Column({ name: 'Valor Total', type: 'varchar' })
    valorTotal: string;

    @Column({ name: 'Valor dos Produtos', type: 'varchar' })
    valorProdutos: string;

    @Column({ name: 'Valor de Descontos', type: 'varchar' })
    valorDescontos: string;

    @Column({ name: 'Cliente', type: 'varchar' })
    cliente: string;

    @Column({ name: 'Endereco de Entrega', type: 'varchar' })
    enderecoEntrega: string;
}