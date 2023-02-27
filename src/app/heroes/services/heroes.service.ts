import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Heroe } from '../interfaces/heroes.interface';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})

export class HeroesService {

  private baseUrl: string = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getHeroes(): Observable<Heroe[]> {
    // http://localhost:3000/heroes
    return this.http.get<Heroe[]>(`${this.baseUrl}`);
  }

  getHeroePorId(id: string): Observable<Heroe> {
    // http://localhost:3000/heroes/<id_superhero>
    return this.http.get<Heroe>(`${this.baseUrl}${id}`);
  }

  getSugerencias(termino: string): Observable<Heroe[]> {
    // http://localhost:3000/heroes?q=<termino>&_limit=<items>
    return this.http.get<Heroe[]>(`${this.baseUrl}?q=${termino}&_limit=6`);
  }
}