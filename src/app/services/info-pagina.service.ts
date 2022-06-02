import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; 
  //info: any = {}; //No deberia usarse any
  cargada = false;

  constructor( private http: HttpClient) { 
    // Prueba de donde aparece
    // console.log('Servicio de infoPagina listo')
    //Leer el archivo JSON
    this.http.get('assets/data/data-paginas.json')
      .subscribe( resp => {

        this.cargada = true;
        this.info = resp;
        console.log( resp );
        // console.log( resp['github'] );

      })
  }
}
