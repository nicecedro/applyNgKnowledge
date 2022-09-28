import { HttpHandler, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/login/services/login.service';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService {

  constructor(private logService: LoginService, private router: Router) { }

  intercept(request: HttpRequest<unknown>, next: HttpHandler) {
    const baseURL = "https://www.tektutorialsHub.com/";

    const jwt = localStorage.getItem('_userinfo') || '';
    if (jwt != '') {

      const authRequest = request.clone({
        url: baseURL,
        setHeaders: {
          'Authorization': `Bearer ${jwt}`,
          'Access-Control-Allow-Origin': '#',
          'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Type, Accept'
        }
      });
      if (this.logService.isTokenExprired(jwt)) {
        this.logService.logOut();
        this.router.navigate(['/login']);
      }
      next.handle(authRequest)
    } else {
      next.handle(request)
    }

  }
}
