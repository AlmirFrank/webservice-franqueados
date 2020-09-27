import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm/dist/common';
import { Repository } from 'typeorm';
import { Produto } from './produto.entity';

@Injectable()
export class ProdutoService {

  constructor(
    @InjectRepository(Produto)
    private readonly repository: Repository<Produto>) {
  }

  save(Produto: Produto) {
    return this.repository.save(Produto);
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

  update(Produto: Produto) {
    return this.repository.update(Produto.id, Produto);
  }
}
