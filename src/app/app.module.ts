import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListaProductosComponent } from './lista-productos/lista-productos.component';
import { CarritoComprasComponent } from './carrito-compras/carrito-compras.component';


import { FormsModule } from '@angular/forms';
import { DatosComponent } from './datos/datos.component';
import { ProductosComponent } from './productos/productos.component';
import { InputNumeroComponent } from './input-numero/input-numero.component';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ListaProductosComponent,
    CarritoComprasComponent,
    DatosComponent,
    ProductosComponent,
    InputNumeroComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
