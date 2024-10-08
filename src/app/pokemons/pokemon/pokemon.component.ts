import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { IPokemon } from '../../models/pokemon.interface';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [MatCardModule, MatButton],
  templateUrl: './pokemon.component.html',
  styleUrl: './pokemon.component.scss',
})
export class PokemonComponent implements OnInit {

  @Input({ required: true }) pokemon?: IPokemon;

  @Output() deletePokemon = new EventEmitter<IPokemon>();

  ngOnInit(): void {
    console.log(this.pokemon);
  }  
}
