import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { interval, map, Observable, take, tap } from 'rxjs';
import { MembresService } from 'src/app/membres/services/membres.service';
import { Users } from '../../models/users.model';
import { LoginService } from '../../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  users !: Users[];
  log$ !: Observable<string>;

  username !: string;
  password !: string;

  connected: string = '';

  constructor(private logService: LoginService,
    private membreService: MembresService,
    private routes: Router
  ) { }

  ngOnInit(): void {
    this.username = '@coduibi.com';
    this.password = '*****';
    this.log$ = interval(1000).pipe(
      map(value => value % 2 === 0 ? `rouge` : `jaune`),
      tap(color => console.log(`La lumière s'allume en %c${color} kskks`, `color: ${this.translateColor(color)}`)),
      take(1)
    );
  }

  translateColor(color: 'rouge' | 'jaune') {
    return color === 'rouge' ? 'red' : 'yellow';
  }

  onLogin() {

    // console.log(`Username %c${this.username}`, 'color: red');
    // console.log(`Password %c${this.password}`, 'color: blue');
    let user = this.logService.getUserByUsername(this.username);
    if (user) {
      console.log(user.username);
      this.connected = '';
      let pwd = this.logService.getUserByPwd(this.password)
      if (pwd) {
        this.connected = '';
        let mbr = this.membreService.getMemberById(user.id);
        localStorage.setItem('username', mbr.username);
        console.log(localStorage.getItem('username') + ' is connected');
        const currentUrl = this.routes.url;
        window.location.assign('/membres');

      } else {
        this.connected = 'Mot de passe incorrect!';
      }
    } else {
      this.connected = 'Nom d\'utilisateur incorrect!';
      // console.log();
    }

  }

}
