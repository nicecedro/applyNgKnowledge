import { Portal } from '@angular/cdk/portal';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'credits', loadChildren: () => import('./credits/credits.module').then(m => m.CreditsModule) },
  { path: 'reclamations', loadChildren: () => import('./reclamations/reclamations.module').then(m => m.ReclamationsModule) },
  { path: 'membres', loadChildren: () => import('./membres/membres.module').then(m => m.MembresModule) },
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: '**', redirectTo: 'credits' }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
