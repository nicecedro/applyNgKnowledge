import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MembresRoutingModule } from './membres-routing.module';
import { MembresListComponent } from './components/membres-list/membres-list.component';
import { MembreDetailComponent } from './components/membre-detail/membre-detail.component';
import { SharedModule } from '../shared/shared.module';
import { MembresService } from './services/membres.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MembresEditComponent } from './components/membres-edit/membres-edit.component';
import { ConfirmationDialogComponent } from './components/dialogs/confirmation-dialog/confirmation-dialog.component';
import { LoginService } from '../login/services/login.service';


@NgModule({
  declarations: [
    MembresListComponent,
    MembreDetailComponent,
    MembresEditComponent,
    ConfirmationDialogComponent
  ],
  imports: [
    CommonModule,
    MembresRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    SharedModule
  ],
  providers: [MembresService, LoginService]
})
export class MembresModule { }
