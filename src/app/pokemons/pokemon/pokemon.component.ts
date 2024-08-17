import { Component, Input, OnInit } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IPokemon } from '../../models/pokemon.interface';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements OnInit {

  @Input({ required: true }) pokemon?: IPokemon;

  ngOnInit(): void {
    console.log(this.pokemon);
  }  
}
