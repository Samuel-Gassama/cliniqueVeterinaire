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
    path: 'ajout-client',
    loadChildren: () => import('./modal/ajout-client/ajout-client.module').then( m => m.AjoutClientPageModule)
  },
  {
    path: 'intervention',
    loadChildren: () => import('./Intervention/intervention/intervention.module').then( m => m.InterventionPageModule)
  },
  {
    path: 'detail-client',
    loadChildren: () => import('./detail-client/detail-client.module').then( m => m.DetailClientPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
