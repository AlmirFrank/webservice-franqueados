import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Controle } from './controle.entity';
import { Repository } from 'typeorm';
import { Produto } from 'src/produto/produto.entity';

@Injectable()
export class ControleService {

  private readonly produtoReplacement: Repository<Produto>

  constructor(
    @InjectRepository(Controle)
    private readonly repository: Repository<Controle>) {
    }

    findById(id: number) {
      const produto = this.produtoReplacement.findOne(id);
      {produto: produto}
        return this.repository.findOne(id);    
    }

    update(controle: Controle) {
      return this.repository.update(controle.id, controle);
    }
    
}