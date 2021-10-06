import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AjoutClientPage } from './ajout-client.page';

const routes: Routes = [
  {
    path: '',
    component: AjoutClientPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AjoutClientPageRoutingModule {}
