import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { MesContactsPageRoutingModule } from './mes-contacts-routing.module';

import { MesContactsPage } from './mes-contacts.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    MesContactsPageRoutingModule
  ],
  declarations: [MesContactsPage]
})
export class MesContactsPageModule {}
