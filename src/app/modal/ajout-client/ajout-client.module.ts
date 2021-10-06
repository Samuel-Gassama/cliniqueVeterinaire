import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule } from '@ionic/angular';
import { AjoutClientPageRoutingModule } from './ajout-client-routing.module';
import { AjoutClientPage } from './ajout-client.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AjoutClientPageRoutingModule
  ],
  declarations: [AjoutClientPage]
})
export class AjoutClientPageModule {}
