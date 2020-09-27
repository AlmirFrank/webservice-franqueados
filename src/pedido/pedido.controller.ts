import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { PedidoDto } from './Pedido.dto';
import { Pedido } from './Pedido.entity';
import { PedidoService } from './Pedido.service';

@Controller('pedido')
export class PedidoController {

  constructor(private readonly pedido: PedidoService) { }

  @Post()
  save(@Body() pedidoDto: PedidoDto) {

    const pedido = plainToClass(Pedido, pedidoDto)
    return this.pedido.save(pedido);
  }

  @Get()
  findAll() {
    return this.pedido.findAll();
  }

  @Get(":id")
  findById(@Param('id') id: number) {
    return this.pedido.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() pedidoDto: PedidoDto) {
    pedidoDto.id = id;
    const pedido = plainToClass(Pedido, pedidoDto);
    return this.pedido.update(pedido);
  }

  @Delete(":id")
  remove(@Param() id: number) {
    return this.pedido.delete(id);
  }
}
