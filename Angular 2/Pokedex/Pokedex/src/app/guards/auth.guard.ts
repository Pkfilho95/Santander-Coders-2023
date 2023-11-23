import { CanActivateFn, Router } from '@angular/router';
import { AppInjector } from '../app.module';

export const authGuard: CanActivateFn = (route, state) => {
  const router = AppInjector.get(Router)

  if (!localStorage.getItem('is_authenticated')) {
    router.navigate(['/']);
  }
  
  return !!localStorage.getItem('is_authenticated');
};

export const loginGuard: CanActivateFn = () => {

  if(localStorage.getItem('is_authenticated')) {
    const router = AppInjector.get(Router);
    router.navigate(['/pokemon']);
  };

  return true;
}
