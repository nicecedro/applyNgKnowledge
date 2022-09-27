import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MembreDetailComponent } from './components/membre-detail/membre-detail.component';
import { MembresEditComponent } from './components/membres-edit/membres-edit.component';
import { MembresListComponent } from './components/membres-list/membres-list.component';

const routes: Routes = [
  { path: '', component: MembresListComponent },
  { path: 'detail/:id', component: MembreDetailComponent },
  { path: 'edit/:id', component: MembresEditComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MembresRoutingModule { }
