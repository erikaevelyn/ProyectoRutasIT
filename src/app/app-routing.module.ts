import { NgModule, Component } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServiciosComponent } from './servicios/servicios.component';
import { ContactoComponent } from './contacto/contacto.component';
import { ProductoComponent } from './producto/producto.component';


const routes: Routes = [
  {
    path: '', component: HomeComponent 
  },
  {
    path: 'servicios', component: ServiciosComponent
  },
  {
    path: 'contacto', component: ContactoComponent
  },
  {
    path: 'producto/:id', component: ProductoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
