import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTable } from '@angular/material/table';
import { Instrument } from '../../interfaces/instruments.interface';
import { InstrumentsService } from '../../services/instruments.service';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrls: ['./carrito.component.css']
})
export class CarritoComponent implements OnInit {

  constructor(private insService: InstrumentsService) { }

  ngOnInit(): void {
  }

  displayedColumns: string[] = ['spr', 'tipo','nombre', 'marca', 'precio', 'cantidad', 'total'];
  dataSource = this.insService.carrito;

  @ViewChild(MatTable) table!: MatTable<Instrument>;

  getTotal() {
    return this.insService.carrito.map(c => c.subtotal!).reduce((acc, value)=> acc + value, 0)
  }

  quitarCarrito(id: number){
    this.insService.quitar(id);
    this.table.renderRows();
  }

  mas(id: number) {
    this.insService.mas(id)
    this.table.renderRows();
  }

  menos( id: number ) {
    this.insService.menos(id)
    this.table.renderRows();
  }

}
