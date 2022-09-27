import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CreditsRoutingModule } from './credits-routing.module';
import { CreditsListComponent } from './components/credits-list/credits-list.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
  declarations: [
    CreditsListComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    CreditsRoutingModule
  ]
})
export class CreditsModule { }
