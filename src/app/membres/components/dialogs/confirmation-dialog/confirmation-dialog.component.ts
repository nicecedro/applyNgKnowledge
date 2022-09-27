import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Membre } from 'src/app/membres/models/membres.model';

@Component({
  selector: 'app-confirmation-dialog',
  templateUrl: './confirmation-dialog.component.html',
  styleUrls: ['./confirmation-dialog.component.scss']
})
export class ConfirmationDialogComponent {
  msg: string = "No data";
  confirmBtnText = "OK";
  cancelBtnText = "Annuler";
  nom: string = "";

  membre!: Membre;


  constructor(
    @Inject(MAT_DIALOG_DATA) private data: any,
    private dialRef: MatDialogRef<ConfirmationDialogComponent>
  ) {
    if (data) {
      this.msg = data.msg || this.msg
      if (data.buttonText) {
        this.confirmBtnText = data.buttonText.ok || this.confirmBtnText;
        this.cancelBtnText = data.buttonText.cancel || this.cancelBtnText;
      }
      this.nom = data.nom || this.nom
      this.membre = data.membre || this.membre
    }
  }

  onConfirm() {
    this.dialRef.close(this.membre)
  }

}
