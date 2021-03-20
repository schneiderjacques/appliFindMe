import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'liste-profiles',
    loadChildren: () => import('./liste-profiles/liste-profiles.module').then( m => m.ListeProfilesPageModule)
  },
  {
    path: 'mes-contacts',
    loadChildren: () => import('./mes-contacts/mes-contacts.module').then( m => m.MesContactsPageModule)
  },
  {
    path: 'mes-favoris',
    loadChildren: () => import('./mes-favoris/mes-favoris.module').then( m => m.MesFavorisPageModule)
  },
  {
    path: 'mes-messages',
    loadChildren: () => import('./mes-messages/mes-messages.module').then( m => m.MesMessagesPageModule)
  },
  {
    path: 'mon-profil',
    loadChildren: () => import('./mon-profil/mon-profil.module').then( m => m.MonProfilPageModule)
  },
  {
    path: 'detail-profil',
    loadChildren: () => import('./detail-profil/detail-profil.module').then( m => m.DetailProfilPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
