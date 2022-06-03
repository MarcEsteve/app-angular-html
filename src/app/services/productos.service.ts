import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { 
    this.cargarProductos();
  }

  private cargarProductos() {

    this.http.get('https://prova3-b13e7-default-rtdb.europe-west1.firebasedatabase.app/productos_idx.json')
       .subscribe((resp) => {
            console.log(resp);
       });
  }
      
}