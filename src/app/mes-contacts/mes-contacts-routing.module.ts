import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MesContactsPage } from './mes-contacts.page';

const routes: Routes = [
  {
    path: '',
    component: MesContactsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class MesContactsPageRoutingModule {}
