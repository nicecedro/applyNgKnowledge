import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { delay, tap } from 'rxjs';
import { Membre } from '../../models/membres.model';
import { MembresService } from '../../services/membres.service';

@Component({
  selector: 'app-membres-edit',
  templateUrl: './membres-edit.component.html',
  styleUrls: ['./membres-edit.component.scss']
})
export class MembresEditComponent implements OnInit {


  membre !: Membre;
  editMembreForm !: FormGroup;
  nomCtrl !: FormControl;
  prenomCtrl !: FormControl;

  loading!: boolean;

  idMembre !: number;


  constructor(private fbuilder: FormBuilder, private routes: ActivatedRoute, private mbrService: MembresService, private router: Router, private snbar: MatSnackBar) { }

  ngOnInit(): void {
    this.loading = true
    // get idMembre
    this.idMembre = +this.routes.snapshot.params['id'];
    // get le membre
    this.membre = this.mbrService.getMemberById(this.idMembre);


    // nom control
    this.nomCtrl = this.fbuilder.control(this.membre.nom, [Validators.required, Validators.pattern('[A-Za-zÀ-ú]*')]);
    this.prenomCtrl = this.fbuilder.control(this.membre.prenom, [Validators.required, Validators.pattern('[A-Za-zÀ-ú]*')]);

    //set formGroup
    this.editMembreForm = this.fbuilder.group({
      nom: this.nomCtrl,
      prenom: this.prenomCtrl
    });

    this.editMembreForm.valueChanges.pipe(
      delay(5000),
      tap((vl) => {
        console.log(vl)
      })
    )
  }
  onUpdate() {

    var memb = this.editMembreForm.value
    this.mbrService.updateMembre(this.idMembre, memb)
    this.router.navigateByUrl('membres');
    this.snbar.open("Membre modifié avec Succès", "OK")


  }


  getFormControl(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Veuillez compléter le nom';
    } if (ctrl.hasError('pattern')) {
      return 'Format incorrect';
    } else {
      return true;
    }
  }

}
