import { Entity, PrimaryGeneratedColumn, Column } from "typeorm";

@Entity("Franqueados")
export class Franqueado {

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ name: 'Nome', type: 'varchar'})
  nome: string;

  @Column({ name: 'Cnpj', type: 'varchar'})
  cnpj: string;

  @Column({ name: 'IE', type: 'varchar'})
  ie: string;

  @Column({ name: 'Endereco', type: 'varchar'})
  endereco: string;

  @Column({ name: 'Bairro', type: 'varchar'})
  bairro: string;

  @Column({ name: 'Cidade', type: 'varchar'})
  cidade: string;

  @Column({ name: 'Cep', type: 'varchar'})
  cep: string;
}