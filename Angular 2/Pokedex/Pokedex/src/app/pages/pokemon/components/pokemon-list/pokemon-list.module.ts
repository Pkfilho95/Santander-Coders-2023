import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonItemComponent } from '../pokemon-item/pokemon-item.component';
import { PokemonListComponent } from './pokemon-list.component';
import { PokemonDetailComponent } from '../pokemon-detail/pokemon-detail.component';
import { ZeroFillPipe } from 'src/pipes/fill.pipe';

@NgModule({
  declarations: [
    PokemonListComponent,
    PokemonItemComponent,
    PokemonDetailComponent,
    ZeroFillPipe
  ],
  exports: [PokemonListComponent],
  imports: [
    CommonModule,
  ]
})
export class PokemonListModule { }
