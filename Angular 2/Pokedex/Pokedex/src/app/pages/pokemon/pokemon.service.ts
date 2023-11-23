import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { PokemonDescription, ResultAPI } from 'src/models/pokemon-models';
import { DEFAULT_API } from 'src/constants/api-url.constant';


@Injectable({
  providedIn: 'root'
})
export class PokemonService {

  constructor(private _http: HttpClient) { }

  public getAllPokemon(): Observable<ResultAPI> {
    return this._http.get<ResultAPI>(DEFAULT_API)
  }

  public getPokemonDescription(url: string): Observable<PokemonDescription> {
    return this._http.get<PokemonDescription>(url)
  }

}
