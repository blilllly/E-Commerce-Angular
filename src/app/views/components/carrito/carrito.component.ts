import { Component, OnInit } from '@angular/core';
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

  displayedColumns: string[] = ['tipo','nombre', 'marca', 'precio', 'cantidad', 'total'];
  dataSource = this.insService.carrito;

}
