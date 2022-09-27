import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ReclamationsRoutingModule } from './reclamations-routing.module';
import { ReclamationsListComponent } from './components/reclamations-list/reclamations-list.component';


@NgModule({
  declarations: [
    ReclamationsListComponent
  ],
  imports: [
    CommonModule,
    ReclamationsRoutingModule
  ]
})
export class ReclamationsModule { }
