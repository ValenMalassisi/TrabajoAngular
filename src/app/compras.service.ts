import { Injectable } from '@angular/core';
import { producto } from './lista-productos/producto';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ComprasService {

  private _listaCompras: producto[] = [];
  listaCompras: BehaviorSubject<producto[]> = new BehaviorSubject(this._listaCompras);

  constructor() { }

  addCarrito(producto:producto): void{

    let item: producto | undefined = this._listaCompras.find((v1) => v1.nombre == producto.nombre);
    
    if(!item) {
      this._listaCompras.push( {... producto});
    } else {
      item.cant += producto.cant;
    }

    this.listaCompras.next(this._listaCompras);
  }
}
