import { Component, EventEmitter, Input, OnChanges, Output, ViewChild } from '@angular/core';
import { PokemonService } from '../../pokemon.service';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { PokemonDescription } from 'src/models/pokemon-models';
import { POKEMON_API } from 'src/constants/api-url.constant';
import { take } from 'rxjs';

interface IStats {
  base: number,
  name: string
}

@Component({
  selector: 'app-pokemon-detail',
  templateUrl: './pokemon-detail.component.html',
  styleUrls: ['./pokemon-detail.component.scss']
})
export class PokemonDetailComponent implements OnChanges {
  @Input() pokemon?: number | string
  @Output() resetPokemon = new EventEmitter<boolean>()

  public pokemonDescription?: PokemonDescription
  public stats?: IStats[]
  public types: string[] = ['normal']

  constructor(private _service: PokemonService, private modalService: NgbModal) { }

  @ViewChild('contentModal') contentModal: any
  
  ngOnChanges(): void {
    if (this.pokemon) {
      this._service
        .getPokemonDescription(`${POKEMON_API}/${this.pokemon}`)
        .pipe(take(1))
        .subscribe({
          next: (result: PokemonDescription) => {
            this.pokemonDescription = {...result}
            this.getStats()
            this.getTypes()
            this.modalService.open(this.contentModal, {backdrop: 'static', keyboard: false})
          },
          error: () => { alert('Pokemon not found.') }
        })
    }
  }

  public close(): void {
    this.modalService.dismissAll(this.contentModal)
    this.resetPokemon.emit(true)
  }

  public getTypes(): void {
    if (this.pokemonDescription) {
      this.types = this.pokemonDescription.types.map(typeInfo => typeInfo.type.name)
    }
  }

  public getStats(): void {
    if (this.pokemonDescription) {
      this.stats = this.pokemonDescription.stats.map(statInfo => ({
        base: statInfo.base_stat,
        name: statInfo.stat.name
      }))
    }
  }

}
