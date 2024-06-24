import { Component } from '@angular/core';
import { producto } from './producto';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss'
})
export class ListaProductosComponent {
  productos: producto[] = [
    {
      "nombre" : "Remera Levis",
      "tipo" : "Remera",
      "precio" : 25000,
      "stock" : 10,
      "imagen" : "assets/img/Levis.png",
      "cant" : 0,
    },
    {
      "nombre" : "Remera Tommy Nautica",
      "tipo" : "Remera",
      "precio" : 30000,
      "stock" : 12,
      "imagen" : "assets/img/Tommy.png",
      "cant" : 0,
    },
    {
      "nombre" : "Buzo Hollister",
      "tipo" : "Buzo",
      "precio" : 35000,
      "stock" : 8,
      "imagen" : "assets/img/Hollister.png",
      "cant" : 0,
    },
    {
      "nombre" : "Buzo Nike",
      "tipo" : "Buzo",
      "precio" : 45000,
      "stock" : 0,
      "imagen" : "assets/img/Nike.png",
      "cant" : 0,
    }
  ];

  maxAlcanzado(mensaje:String){
    alert(mensaje);
  }
}
