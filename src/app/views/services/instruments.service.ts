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
    this._carrito.push(item)
  }

  quitar(id: number) {
    this._carrito.splice( this._carrito.findIndex( (c) => c.id === id) , 1 );
    // console.log(this._carrito)
  }
}
