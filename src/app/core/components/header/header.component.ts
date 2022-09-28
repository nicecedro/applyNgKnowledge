import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userConnected?: any;
  constructor(private routes: Router, private logService: LoginService) { }

  ngOnInit(): void {
    this.userConnected = this.logService.getConnectedUser();;

  }

  onLogout() {
    this.logService.logOut();
    const currentUrl = this.routes.url;
    window.location.assign('/login');
  }

}
