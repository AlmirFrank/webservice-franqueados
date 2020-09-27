import { Body, Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { plainToClass } from 'class-transformer';
import { ProdutoDto } from './produto.dto';
import { Produto } from './produto.entity';
import { ProdutoService } from './produto.service';

@Controller('produto')
export class ProdutoController {

    constructor(private readonly produto: ProdutoService) { }

    @Post()
    save(@Body() produtoDto: ProdutoDto) {

        const pedido = plainToClass(Produto, produtoDto)
        return this.produto.save(pedido);
    }

    @Get()
    findAll() {
        return this.produto.findAll();
    }

    @Get(":id")
    findById(@Param('id') id: number) {
        return this.produto.findById(id);
    }

    @Put(':id')
    update(@Param('id') id: number, @Body() produtoDto: ProdutoDto) {
        produtoDto.id = id;
        const pedido = plainToClass(Produto, produtoDto);
        return this.produto.update(pedido);
    }

    @Delete(":id")
    remove(@Param() id: number) {
        return this.produto.delete(id);
    }
}
