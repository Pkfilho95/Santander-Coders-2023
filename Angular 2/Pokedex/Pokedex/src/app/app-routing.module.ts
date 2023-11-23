import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { authGuard, loginGuard } from './guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => 
      import('./pages/login/login.module').then(m => m.LoginModule),
      canActivate: [loginGuard]
  },
  {
    path: 'pokemon',
    loadChildren: () => 
      import('./pages/pokemon/pokemon.module').then(m => m.PokemonModule),
      canActivate: [authGuard]
  },
  {
    path: 'not-found',
    loadChildren: () =>
      import('./pages/not-found/not-found.module').then(m => m.NotFoundModule)
  },
  // {
  //   path: '',
  //   redirectTo: 'login',
  //   pathMatch: 'full'
  // },
  { 
    path: '**', 
    redirectTo: 'not-found',
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
