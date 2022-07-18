import { Injectable } from '@angular/core';
import { Instrument } from '../interfaces/instruments.interface';

@Injectable({
  providedIn: 'root'
})
export class InstrumentsService {

  private _carrito: Instrument[] = [];

  constructor() { }

  get carrito() {
    return this._carrito;
  }

  anadir(item: Instrument) {
    item.cantidad = 1;
    item.subtotal = item.precio * item.cantidad;
    this._carrito.push(item)
  }

  quitar(id: number) {
    this._carrito.splice( this._carrito.findIndex( (c) => c.id === id) , 1 );
    // console.log(this._carrito)
  }

  mas(id: number) {
    this._carrito.map( x => {
      if(x.id === id && x.cantidad! < 5 ) {
        x.cantidad = x.cantidad! + 1;
        x.subtotal = x.cantidad * x.precio;
      }
    })
  }

  menos(id: number) {
    this._carrito.map( x => {
      if(x.id === id && x.cantidad! > 1) {
        x.cantidad = x.cantidad! - 1;
        x.subtotal = x.cantidad * x.precio;
      }
    })
  }
}
