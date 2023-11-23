import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Pokemon, PokemonDescription } from 'src/models/pokemon-models';
import { PokemonService } from '../../pokemon.service';
import { take } from 'rxjs';

@Component({
  selector: 'app-pokemon-item',
  templateUrl: './pokemon-item.component.html',
  styleUrls: ['./pokemon-item.component.scss']
})
export class PokemonItemComponent implements OnInit {
  @Input() pokemon?: Pokemon
  @Output() pokemonDetail = new EventEmitter<number>()

  public pokemonId: number = 0
  public pokemonImage?: string
  public pokemonType: string[] = ['normal']

  constructor(private _service: PokemonService) { }

  ngOnInit(): void {
    if (this.pokemon) {
      this._service
        .getPokemonDescription(this.pokemon.url)
        .pipe(take(1))
        .subscribe({
          next: (result: PokemonDescription) => {
            this.pokemonId = result.id
            this.pokemonImage = result.sprites.front_default
            this.pokemonType = result.types.map(typeInfo => typeInfo.type.name)
          },
        })
    }
  }

  public detail(id: number): void {
    this.pokemonDetail.emit(id)
  }
}
