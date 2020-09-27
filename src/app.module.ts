import { Module } from '@nestjs/common';
import { FranqueadoController } from './franqueado/franqueado.controller';
import { FranqueadoService } from './franqueado/franqueado.service';
import { PedidoController } from './pedido/pedido.controller';
import { PedidoService } from './pedido/pedido.service';
import { ProdutoController } from './produto/produto.controller';
import { ProdutoService } from './produto/produto.service';
import { TypeOrmModule } from '@nestjs/typeorm/dist/typeorm.module';
import { Franqueado } from './franqueado/franqueado.entity';
import { Pedido } from './pedido/pedido.entity';
import { Produto } from './produto/produto.entity';
import { ControleController } from './controle/controle.controller';
import { ControleService } from './controle/controle.service';
import { Controle } from './controle/controle.entity';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: 'Aranha0600',
      database: 'webservice-franqueado',
      entities: [
        Franqueado,
        Pedido,
        Produto,
        Controle,
      ],

      synchronize: true,
      logging: true,

    }),

    TypeOrmModule.forFeature([
      Franqueado,
      Pedido,
      Produto,
      Controle,
    ])

  ],

  controllers: [FranqueadoController, PedidoController, ProdutoController, ControleController],
  providers: [FranqueadoService, PedidoService, ProdutoService, ControleService],
})
export class AppModule { }
