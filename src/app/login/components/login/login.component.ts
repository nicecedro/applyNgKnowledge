import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { tap } from 'rxjs';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm !: FormGroup;
  username !: FormControl;
  password !: FormControl;

  errMsg !: string;
  loading: boolean = false;

  constructor(private logService: LoginService,
    private fbuilder: FormBuilder,
    private snBar: MatSnackBar,
    private route: Router
  ) { }

  ngOnInit(): void {

    this.username = this.fbuilder.control('@coduibi.com', [Validators.required]);
    this.password = this.fbuilder.control('******', [Validators.required]);
    this.loginForm = this.fbuilder.group({
      username: this.username,
      password: this.password,
    });

    this.loginForm.valueChanges.pipe(
      tap(() => this.errMsg = '')
    ).subscribe()
  }
  onLogin() {

    if (this.logService.do_login(this.loginForm.value)) {
      const jwt = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c';
      this.logService.saveToken(jwt)
      this.snBar.open('Connexion établie', 'OK');
      window.location.assign('/membres')
      this.errMsg = '';
    } else {
      console.log('Username ou password incorrect');
      this.errMsg = 'Username ou password incorrect';
    }
  }

  unVal(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Nom d\'utilisateur est obligatoire';
    } else {
      return 'OK';
    }
  }

  pwdVal(ctrl: AbstractControl) {
    if (ctrl.hasError('required')) {
      return 'Mot de passe est obligatoire';
    } else {
      return 'OK';
    }
  }

}
