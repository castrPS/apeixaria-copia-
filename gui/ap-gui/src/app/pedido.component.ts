import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';

import { Pedido } from './pedido';
import { PedidoService } from './pedido.service';

@Component({
  selector: 'pedidos',
  templateUrl: './pedido.component.html'
})
export class PedidoComponent implements OnInit {
   constructor(private pedidoService: PedidoService) {}

   pedido: Pedido= new Pedido();

   ngOnInit(): void {
        this.pedido=this.pedidoService.getCode();
         this.pedidoService.getPedido(this.pedido)
         .then(pedido => this.pedido = pedido)
         .catch(erro => alert(erro));
    }

}