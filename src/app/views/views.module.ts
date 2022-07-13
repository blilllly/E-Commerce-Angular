import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './pages/login/login.component';
import { WelcomeComponent } from './pages/welcome/welcome.component';
import { MaterialModule } from '../material/material.module';
import { GuitarrasComponent } from './pages/guitarras/guitarras.component';
import { InstrumentCardComponent } from './components/instrument-card/instrument-card.component';
import { CarritoComponent } from './components/carrito/carrito.component';



@NgModule({
  declarations: [
    LoginComponent,
    WelcomeComponent,
    GuitarrasComponent,
    InstrumentCardComponent,
    CarritoComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
  ]
})
export class ViewsModule { }
