import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ListeProfilesPageRoutingModule } from './liste-profiles-routing.module';

import { ListeProfilesPage } from './liste-profiles.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ListeProfilesPageRoutingModule
  ],
  declarations: [ListeProfilesPage]
})
export class ListeProfilesPageModule {}
