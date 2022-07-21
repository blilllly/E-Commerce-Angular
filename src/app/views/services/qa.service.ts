import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Preguntas, Respuestas } from '../interfaces/instruments.interface';

@Injectable({
  providedIn: 'root'
})
export class QaService {

  private _pregArray: Preguntas[] = [
    {
      id: 1,
      nombre: 'Neysser Tenemea',
      titulo: 'Hola mundo',
      contenido: 'El que tenga miedo a morir que no nazca.'
    }
  ]

  private _respArray: Respuestas[] = [
    {
      idPre: 1,
      nombre: 'Pradin',
      titulo: 'Dinero y Rastas',
      contenido: 'JAJAJJAJA'
    },
    {
      idPre: 1,
      nombre: 'Ruiz',
      titulo: 'Hola bb',
      contenido: 'Ya que contigo no existe la labia'
    }
  ]

  get preguntas() {
    return this._pregArray
  }

  get respuestas() {
    return this._respArray
  }

  constructor(private _snackBar: MatSnackBar) { }

  addPreg(item: Preguntas) {
    this._pregArray.unshift(item)
    this.snackSuccess()
  }

  addResp(item: Respuestas) {
    this._respArray.unshift(item)
    this.snackSuccess()
  }

  snackError() {
    this._snackBar.open( 'Error: El id ya existe', undefined, { duration: 2500 } )
  }

  snackSuccess() {
    this._snackBar.open( 'La pregunta se añadió correctamente', undefined, { duration: 2500 } )
  }
}
