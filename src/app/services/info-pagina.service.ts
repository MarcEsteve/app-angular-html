import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InfoPagina } from '../interfaces/info-pagina.interfaces';

@Injectable({
  providedIn: 'root'
})
export class InfoPaginaService {

  info: InfoPagina = {}; 
  cargada = false;
  equipo: any = [];

  constructor( private http: HttpClient) { 
    this.cargarInfo();
    this.cargarEquipo();
  }

  //Métodos
  private cargarInfo(){
    //Leer archivo JSON parámetros globales
    this.http.get('assets/data/data-paginas.json')
    .subscribe( resp => {
      this.cargada = true;
      this.info = resp;
    })
  }

  private cargarEquipo(){
    //Leer archivo JSON de Firebase de miembros del equipo
    this.http.get('https://prova3-b13e7-default-rtdb.europe-west1.firebasedatabase.app/equip.json')
    .subscribe( resp => {
      this.equipo = resp;
      // console.log( resp );
    })
  }

}
