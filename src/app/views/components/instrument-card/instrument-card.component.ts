import { Component, Input, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Instrument } from '../../interfaces/instruments.interface';
import { InstrumentsService } from '../../services/instruments.service';

@Component({
  selector: 'app-instrument-card',
  templateUrl: './instrument-card.component.html',
  styleUrls: ['./instrument-card.component.css']
})
export class InstrumentCardComponent implements OnInit {

  constructor(private _snackBar: MatSnackBar, private insService: InstrumentsService) { }

  ngOnInit(): void {
  }

  @Input() items: Instrument[]= [];

  anadirCarrito(item: Instrument) {
    if(this.insService.anadir(item)){
      this._snackBar.open(
        `${ item.marca } ${item.nombre} se añadió al carrito`,
        undefined,
        {
          duration: 2500
        }
      );
    }else{
      this._snackBar.open(
        `${ item.marca } ${item.nombre} se sumó al carrito`,
        undefined,
        {
          duration: 2500
        }
      );
    }
    
  }

}
