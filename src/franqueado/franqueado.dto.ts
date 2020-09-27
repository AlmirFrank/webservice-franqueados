import { IsString, MinLength, MaxLength } from "class-validator";

export class FranqueadoDto {

  id: number;

  @IsString({ message: 'O nome inserido é inválido!' })
  @MinLength(4, { message: 'O campo nome deve ter no mínimo 4 caracteres' })
  @MaxLength(30, { message: 'O campo nome deve ter no máximo 30 caracteres' })
  nome: string;

  @IsString({ message: 'O cnpj inserido é inválido!' })
  @MinLength(8, { message: 'O campo cnpj deve ter no mínimo 8 caracteres' })
  @MaxLength(16, { message: 'O campo cnpj deve ter no máximo 16 caracteres' })
  cnpj: string;

  @IsString({ message: 'A inscrição estadual inserida é inválida!' })
  @MinLength(6, { message: 'O campo inscrição estadual deve ter no mínimo 6 caracteres' })
  @MaxLength(14, { message: 'O campo inscrição estadual deve ter no máximo 14 caracteres' })
  ie: string;

  @IsString({ message: 'O Endereço inserido é inválido!' })
  @MinLength(30, { message: 'O campo Endereço deve ter no mínimo 30 caracteres' })
  @MaxLength(100, { message: 'O campo Endereço deve ter no máximo 100 caracteres' })
  endereco: string;

  @IsString({ message: 'O bairro inserido é inválido!' })
  @MinLength(4, { message: 'O campo bairro deve ter no mínimo 4 caracteres' })
  @MaxLength(20, { message: 'O campo bairro deve ter no máximo 20 caracteres' })
  bairro: string;

  @IsString({ message: 'A cidade inserida é inválida!' })
  @MinLength(4, { message: 'O campo cidade deve ter no mínimo 4 caracteres' })
  @MaxLength(15, { message: 'O campo cidade deve ter no máximo 15 caracteres' })
  cidade: string;

  @IsString({ message: 'O cep inserido é inválido!' })
  @MinLength(8, { message: 'O campo cep deve ter no mínimo 8 caracteres' })
  @MaxLength(10, { message: 'O campo cep deve ter no máximo 10 caracteres' })
  cep: string;
}