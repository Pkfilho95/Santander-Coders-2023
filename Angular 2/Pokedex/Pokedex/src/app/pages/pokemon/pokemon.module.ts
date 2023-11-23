import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { PokemonComponent } from './pokemon.component';
import { PokemonService } from './pokemon.service';
import { PokemonListModule } from './components/pokemon-list/pokemon-list.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [PokemonComponent],
  exports: [PokemonComponent],
  imports: [
    CommonModule,
    PokemonRoutingModule,
    PokemonListModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [PokemonService]
})
export class PokemonModule { }
