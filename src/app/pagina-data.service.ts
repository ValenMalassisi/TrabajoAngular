import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { producto } from './lista-productos/producto';
import { Observable, tap } from 'rxjs';


const URL = 'https://5f87805549ccbb00161775ca.mockapi.io/api/v1/beers';


@Injectable({
  providedIn: 'root'
})
export class PaginaDataService {

  constructor(private http: HttpClient) { }

  
  public getAll(): Observable<producto[]> {
    return this.http.get<producto[]>(URL)
    .pipe(
      tap((productos: producto[]) => productos.forEach(producto => producto.cant = 0))
    );
    
  }
}
