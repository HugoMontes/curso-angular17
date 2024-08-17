import { MatListItem, MatNavList } from '@angular/material/list';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { POKEMONS } from '../models/constants';
import { IPokemon } from '../models/pokemon.interface';
import { PokemonComponent } from './pokemon/pokemon.component';

@Component({
  selector: 'app-pokemons',
  standalone: true,
  imports: [MatNavList, MatListItem, MatButton, PokemonComponent],
  templateUrl: './pokemons.component.html',
  styleUrl: './pokemons.component.scss',
})
export class PokemonsComponent {

  pokemons = [...POKEMONS];
  pokemonSelected?: IPokemon;

  clickRestore(): void {
    this.pokemons = [...POKEMONS];
  }

  clickItem(pokemon: IPokemon): void {
    // console.log(pokemon);
    this.pokemonSelected = pokemon;
  }

  deletePokemon(pokemon: IPokemon): void {
    // console.log(pokemon);
    const index = this.pokemons.indexOf(pokemon!);
    if (index >= 0) {
      this.pokemons.splice(index, 1);
      this.pokemonSelected = undefined;
    }
  }
}
