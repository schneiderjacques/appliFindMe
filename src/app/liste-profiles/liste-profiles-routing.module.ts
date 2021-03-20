import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListeProfilesPage } from './liste-profiles.page';

const routes: Routes = [
  {
    path: '',
    component: ListeProfilesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ListeProfilesPageRoutingModule {}
