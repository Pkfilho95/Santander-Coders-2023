import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { PokemonModule } from './pages/pokemon/pokemon.module';
import { NotFoundModule } from './pages/not-found/not-found.module';
import { LoginModule } from './pages/login/login.module';

export let AppInjector: Injector

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NotFoundModule,
    PokemonModule,
    LoginModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { 
  constructor (private injector: Injector) {
    AppInjector = this.injector
  }
}
