import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common/typeorm.decorators';
import { Repository } from 'typeorm';
import { Pedido } from './Pedido.entity';

@Injectable()
export class PedidoService {

  constructor(
    @InjectRepository(Pedido)
    private readonly repository: Repository<Pedido>) {
  }

  save(Pedido: Pedido) {
    return this.repository.save(Pedido);
  }

  delete(id: number) {
    return this.repository.delete(id);
  }

  findAll() {
    return this.repository.find();
  }

  findById(id: number) {
    return this.repository.findOne(id);
  }

  update(Pedido: Pedido) {
    return this.repository.update(Pedido.id, Pedido);
  }
}
