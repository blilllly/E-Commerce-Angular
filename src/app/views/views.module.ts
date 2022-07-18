import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material.module';
import { GuitarrasComponent } from './pages/instruments/guitarras/guitarras.component';
import { InstrumentCardComponent } from './components/instrument-card/instrument-card.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { AmplisComponent } from './pages/instruments/amplis/amplis.component';
import { PagoComponent } from './pages/pago/pago.component';
import { AddInstrumentComponent } from './pages/add-instrument/add-instrument.component';



@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    GuitarrasComponent,
    InstrumentCardComponent,
    CarritoComponent,
    AmplisComponent,
    PagoComponent,
    AddInstrumentComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ViewsModule { }
