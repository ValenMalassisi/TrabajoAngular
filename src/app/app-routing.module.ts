import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductosComponent } from './productos/productos.component';
import { DatosComponent } from './datos/datos.component';

const routes: Routes = [
  { 
    path: '',
    redirectTo: 'productos',
    pathMatch: 'full',
  },
  { 
    path: 'productos',
    component: ProductosComponent,
  },
  {
    path: 'datos',
    component: DatosComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
