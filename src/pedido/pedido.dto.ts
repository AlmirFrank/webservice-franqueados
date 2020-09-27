import { IsString, MinLength, MaxLength } from "class-validator";

export class PedidoDto {

  id: number;

  @IsString({ message: 'O Codigo inserido é inválido!' })
  @MinLength(1, { message: 'O campo Codigo deve ter no mínimo 1 caracteres' })
  @MaxLength(10, { message: 'O campo Codigo deve ter no máximo 10 caracteres' })
  codigo: string;

  @IsString({ message: 'A Data inserida é inválida!' })
  @MinLength(10, { message: 'O campo Data deve ter no mínimo 10 caracteres' })
  @MaxLength(10, { message: 'O campo Data deve ter no máximo 10 caracteres' })
  data: string;

  @IsString({ message: 'A Data Entrega Prevista inserida é inválida!' })
  @MinLength(10, { message: 'O campo Data Entrega Prevista deve ter no mínimo 10 caracteres' })
  @MaxLength(10, { message: 'O campo Data Entrega Prevista deve ter no máximo 10 caracteres' })
  dataEntregaPrevista: string;

  @IsString({ message: 'A Transportadora inserida é inválida!' })
  @MinLength(2, { message: 'O campo Transportadora deve ter no mínimo 2 caracteres' })
  @MaxLength(20, { message: 'O campo Transportadora deve ter no máximo 20 caracteres' })
  transportadora: string;

  @IsString({ message: 'O Valor Total inserido é inválido!' })
  @MinLength(4, { message: 'O campo Valor Total deve ter no mínimo 4 caracteres' })
  @MaxLength(11, { message: 'O campo Valor Total deve ter no máximo 11 caracteres' })
  valorTotal: string;

  @IsString({ message: 'O Valor Dos Produtos inserido é inválido!' })
  @MinLength(4, { message: 'O campo Valor Dos Produtos deve ter no mínimo 4 caracteres' })
  @MaxLength(11, { message: 'O campo Valor Dos Produtos deve ter no máximo 11 caracteres' })
  valorProdutos: string;

  @IsString({ message: 'O Valor do Descontos inserido é inválido!' })
  @MinLength(4, { message: 'O campo Valor do Descontos deve ter no mínimo 4 caracteres' })
  @MaxLength(11, { message: 'O campo Valor do Descontos deve ter no máximo 11 caracteres' })
  valorDescontos: string;

  @IsString({ message: 'O Cliente inserido é inválido!' })
  @MinLength(2, { message: 'O campo Cliente deve ter no mínimo 2 caracteres' })
  @MaxLength(20, { message: 'O campo Cliente deve ter no máximo 20 caracteres' })
  cliente: string;

  @IsString({ message: 'O Endereço de Entrega inserido é inválido!' })
  @MinLength(30, { message: 'O campo Endereço de Entrega deve ter no mínimo 30 caracteres' })
  @MaxLength(100, { message: 'O campo Endereço de Entrega deve ter no máximo 100 caracteres' })
  enderecoEntrega: string;

}