import { IsString, MinLength, MaxLength } from "class-validator";

export class ProdutoDto {

    id: number;

    @IsString({ message: 'O Nome inserido é inválido!' })
    @MinLength(3, { message: 'O campo Nome deve ter no mínimo 3 caracteres' })
    @MaxLength(20, { message: 'O campo Nome deve ter no máximo 20 caracteres' })
    nome: string;

    @IsString({ message: 'A Descrição inserida é inválida!' })
    @MinLength(10, { message: 'O campo Descrição deve ter no mínimo 10 caracteres' })
    @MaxLength(50, { message: 'O campo Descrição deve ter no máximo 50 caracteres' })
    descricao: string;

    @IsString({ message: 'O Preço inserido é inválido!' })
    @MinLength(4, { message: 'O campo Preço deve ter no mínimo 4 caracteres' })
    @MaxLength(11, { message: 'O campo Preço deve ter no máximo 11 caracteres' })
    preco: string;

    @IsString({ message: 'O Estoque inserido é inválido!' })
    @MinLength(1, { message: 'O campo Estoque deve ter no mínimo 1 caracteres' })
    estoque: string;

    @IsString({ message: 'O Data de Validade inserida é inválida!' })
    @MinLength(10, { message: 'O campo Data de Validade deve ter no mínimo 10 caracteres' })
    @MaxLength(10, { message: 'O campo Data de Validade deve ter no máximo 10 caracteres' })
    dataValidade: string;

    @IsString({ message: 'O Unidade de Medida inserida é inválida!' })
    @MinLength(2, { message: 'O campo Unidade de Medida deve ter no mínimo 2 caracteres' })
    @MaxLength(10, { message: 'O campo Unidade de Medida deve ter no máximo 10 caracteres' })
    unidadeMedida: string;
}