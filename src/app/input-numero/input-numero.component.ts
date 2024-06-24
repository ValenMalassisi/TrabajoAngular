import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-input-numero',
  templateUrl: './input-numero.component.html',
  styleUrl: './input-numero.component.scss'
})

export class InputNumeroComponent {

  @Input()
  cantidad: number = 0;

  @Input()
  max: number = 0;

  @Output()
  cantidadChange: EventEmitter<number> = new EventEmitter <number>;

  @Output()
  maxAlcanzado: EventEmitter<string> = new EventEmitter <string>;

  masCant() : void {
    if (this.cantidad < this.max){
      this.cantidad++;
      this.cantidadChange.emit(this.cantidad);

    } else
        this.maxAlcanzado.emit("Se alcanzo el limite");
  }

  menosCant() : void {
    if (this.cantidad > 0)
      this.cantidad--;
      this.cantidadChange.emit(this.cantidad);
  }

  cambiaCant (event:any): void {
    console.log(event.key);
    this.cantidadChange.emit(this.cantidad);
  }
}
