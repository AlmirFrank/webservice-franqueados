import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { FranqueadoDto } from './franqueado.dto';
import { Franqueado } from './franqueado.entity';
import { FranqueadoService } from './franqueado.service';

@Controller('franqueado')
export class FranqueadoController {

  constructor(private readonly franqueado: FranqueadoService) { }

  @Post()
  save(@Body() franqueadoDto: FranqueadoDto) {

    const franqueado = plainToClass(Franqueado, franqueadoDto)
    return this.franqueado.save(franqueado);
  }

  @Get()
  findAll() {
    return this.franqueado.findAll();
  }

  @Get(":id")
  findById(@Param('id') id: number) {
    return this.franqueado.findById(id);
  }

  @Put(':id')
  update(@Param('id') id: number, @Body() franqueadoDto: FranqueadoDto) {
    franqueadoDto.id = id;
    const franqueado = plainToClass(Franqueado, franqueadoDto);
    return this.franqueado.update(franqueado);
  }

  @Delete(":id")
  remove(@Param() id: number) {
    return this.franqueado.delete(id);
  }
}
