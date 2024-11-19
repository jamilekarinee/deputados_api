import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { Observable } from 'rxjs';
import { Deputado } from './deputado';

@Injectable({
  providedIn: 'root'
})
export class DeputadoService {
  private API='https://dadosabertos.camara.leg.br/api/v2/deputados'

  constructor(private http: HttpClient) {    
  }

  buscarDeputadoPorTitulo(nome: string): Observable<any> {
    return this.http.get<any>(`${this.API}?nome=${nome}&ordem=ASC&ordenarPor=nome`)
  }
}
