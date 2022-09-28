import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { filter, map, Observable, tap } from 'rxjs';
import { LoginService } from 'src/app/login/services/login.service';
import { Membre } from '../../models/membres.model';
import { MembresService } from '../../services/membres.service';
import { ConfirmationDialogComponent } from '../dialogs/confirmation-dialog/confirmation-dialog.component';

@Component({
  selector: 'app-membres-list',
  templateUrl: './membres-list.component.html',
  styleUrls: ['./membres-list.component.scss']
})
export class MembresListComponent implements OnInit {

  searchForm !: FormGroup;

  membres !: Membre[];
  showInfo !: boolean;
  btnText: string = 'Plus';
  btnColor: string = '';

  membre$ !: Observable<Membre>;
  membre !: Membre;

  searchCtrl !: FormControl;


  search: string = 'Nom et prénom';
  displayedColumns = ['id', 'nom', 'prenoms', 'username', 'action'];

  constructor(private membreService: MembresService, private route: Router, private fbuilder: FormBuilder, private dialog: MatDialog, private logService: LoginService, private snabar: MatSnackBar) { }

  ngOnInit(): void {
    this.membres = this.membreService.getAllMembres()
    this.showInfo = false;

    this.searchForm = this.fbuilder.group({
      searchCtrl: [null, [Validators.required]]
    });

    console.log(this.logService.isAuthenticated());

    if (this.logService.isAuthenticated()) {
      this.snabar.open('VOus avez été identifié', 'Fermer');
    } else {

      this.snabar.open('Vous n\'avez pas été identifié');
    }

    this.membre$ = this.searchForm.valueChanges.pipe(
      map(val => val['id']),
      tap(val => console.log(14))
    )

  }

  onDetail(id: number) {
    // this.route.navigateByUrl(`membres/detail/${id}`);
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '40%',
      data: {
        msg: "NIZIGIYIMANA",
        buttonText: {
          ok: 'Confirmer',
          cancel: 'Annuler'
        },
        nom: "OK",
        membre: this.membreService.getMemberById(+id)
      },
    });

    dialogRef.afterClosed().pipe(
      tap(result => { console.log(result) })
    ).subscribe();
  }

  onEdit(id: number) {
    this.route.navigateByUrl(`membres/edit/${id}`);

  }

  openDialog() {
    const dialogRef = this.dialog.open(ConfirmationDialogComponent, {
      width: '250px',
      data: {
        msg: "NIZIGIYIMANA",
        buttonText: {
          ok: 'Confirmer',
          cancel: 'Annuler'
        },
        nom: "OK",
        membre: this.membres
      },
    });

    dialogRef.afterClosed().pipe(
      tap(result => { console.log(result) })
    ).subscribe();
  }


  onSubmitSearch() {

  };

}