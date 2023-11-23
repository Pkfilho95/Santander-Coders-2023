import { Component, EventEmitter, Input, OnChanges, Output } from '@angular/core';
import { Pokemon } from 'src/models/pokemon-models';

@Component({
  selector: 'app-pokemon-list',
  templateUrl: './pokemon-list.component.html',
  styleUrls: ['./pokemon-list.component.scss']
})
export class PokemonListComponent implements OnChanges {
  @Input() pokemonList: Pokemon[] = []
  @Input() searchPokemon?: string
  @Output() resetSearch = new EventEmitter<boolean>()

  public pokemonDetail?: number | string

  ngOnChanges(): void {
    if (this.searchPokemon) {
      this.pokemonDetail = this.searchPokemon.toLowerCase()
    }
  }

  public onPokemonDetail(id: number): void {
    this.pokemonDetail = id
  }

  public onResetPokemon(reset: boolean): void {
    if (reset) {
      this.pokemonDetail = undefined
      this.resetSearch.emit(true)
    }
  }

}
