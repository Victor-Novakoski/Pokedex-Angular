import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  pokemons = [];

  constructor(public HttpClient: HttpClient) {
    this.reloadPokemons();
  }

  async reloadPokemons() {
    const request = await this.HttpClient.get<any>(
      'https://pokeapi.co/api/v2/pokemon?limit=151'
    ).toPromise();

    return (this.pokemons = request.results);
  }
}
