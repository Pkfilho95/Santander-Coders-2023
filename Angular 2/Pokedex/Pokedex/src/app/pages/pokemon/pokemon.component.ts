import { Component, OnInit } from '@angular/core';
import { Pokemon, ResultAPI } from 'src/models/pokemon-models';
import { PokemonService } from './pokemon.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { take } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  templateUrl: './pokemon.component.html',
  styleUrls: ['./pokemon.component.scss']
})
export class PokemonComponent implements OnInit {

  constructor(private _service: PokemonService, private _fb: FormBuilder) { }

  public pokemonList: Pokemon[] = []
  public searchPokemon?: string 

  public searchForm: FormGroup = this._fb.group({
    search: [null]
  })

  ngOnInit(): void {
    this._service.getAllPokemon()
      .pipe(take(1))
      .subscribe({
        next: (result: ResultAPI) => {
          this.pokemonList = result.results
        }
      })
  }

  public search(): void {
    const { search } = this.searchForm.value
    if (search) {
      this.searchPokemon = String(search)
    }
    this.searchForm.reset()
  }

  public onResetSearch(reset: boolean): void {
    if (reset) {
      this.searchPokemon = undefined
    }
  }

}
