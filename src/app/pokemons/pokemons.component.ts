import { MatListItem, MatNavList } from '@angular/material/list';
import { Component } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { POKEMONS } from '../models/constants';
import { IPokemon } from '../models/pokemon.interface';
import { PokemonComponent } from "./pokemon/pokemon.component";

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

  clickRestore(): void {}

  clickItem(pokemon: IPokemon): void {
    // console.log(pokemon);
    this.pokemonSelected = pokemon;
  }
}
