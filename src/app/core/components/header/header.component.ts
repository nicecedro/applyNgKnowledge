import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  userConnected?: string;
  constructor(private routes: Router) { }

  ngOnInit(): void {
    this.userConnected = localStorage.getItem('username')?.toString();
  }

  onLogout() {

    localStorage.setItem('username', '');

    const currentUrl = this.routes.url;
    window.location.assign('/login');
  }

}
