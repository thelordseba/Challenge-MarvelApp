import { Routes } from '@angular/router';

export const routes: Routes = [
{
  path:'', 
  loadComponent: () => import('./home/home.page').then(m => m.HomePage)
},
{
  path: 'hero-detail',
  loadComponent: () => import('./hero-detail/hero-detail.page').then( m => m.HeroDetailPage),
  data: {
    hero: null
  }
}
];
