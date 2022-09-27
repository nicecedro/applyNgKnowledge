import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ReclamationsListComponent } from './components/reclamations-list/reclamations-list.component';

const routes: Routes = [
  { path: '', component: ReclamationsListComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ReclamationsRoutingModule { }
