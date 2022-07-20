import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './views/pages/login/login.component';
import { WelcomeComponent } from './views/pages/welcome/welcome.component';
import { GuitarrasComponent } from './views/pages/instruments/guitarras/guitarras.component';
import { AddInstrumentComponent } from './views/pages/add-instrument/add-instrument.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
    pathMatch: 'full'
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'guitarras',
    component: GuitarrasComponent
  },
  {
    path: 'add',
    component: AddInstrumentComponent
  },
  {
    path: '**',
    redirectTo: ''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
