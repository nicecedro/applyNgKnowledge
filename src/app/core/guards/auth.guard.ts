import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from "@angular/router";
import { Observable } from "rxjs";
import { LoginService } from "src/app/login/services/login.service";

@Injectable({
    providedIn: "root"
})
export class AuthGuard implements CanActivate {

    constructor(private snackbar: MatSnackBar, private rout: Router, private logService: LoginService) { }

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.logService.isAuthenticated() === true) {
            // this.rout.navigateByUrl('/membres');
            return true
        }
        this.rout.navigateByUrl('/login')
        return false;

    }
}