import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaProdComponent } from './components/productos/lista-prod/lista-prod.component';
import { DetallesProdComponent } from './components/productos/detalles-prod/detalles-prod.component';

const routes: Routes = [
  { 'path': 'productos/:categoria', component: ListaProdComponent},
  { 'path': 'detalles/:id', component: DetallesProdComponent},
  { 'path': '**', redirectTo: 'productos/celulares'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
