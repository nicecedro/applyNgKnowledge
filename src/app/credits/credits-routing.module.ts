import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreditsListComponent } from './components/credits-list/credits-list.component';

const routes: Routes = [
  { path: 'mescredits', component: CreditsListComponent },
  { path: '', pathMatch: 'full', redirectTo: 'mescredits' }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CreditsRoutingModule { }
