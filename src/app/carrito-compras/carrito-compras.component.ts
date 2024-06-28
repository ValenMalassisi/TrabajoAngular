import { Component } from '@angular/core';
import { ComprasService } from '../compras.service';
import { producto } from '../lista-productos/producto';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-carrito-compras',
  templateUrl: './carrito-compras.component.html',
  styleUrl: './carrito-compras.component.scss'
})
export class CarritoComprasComponent {

  lista_compras$: Observable<producto[]> = new Observable;

  constructor(private carrito: ComprasService){
    this.lista_compras$ = carrito.listaCompras.asObservable();
  }
}
