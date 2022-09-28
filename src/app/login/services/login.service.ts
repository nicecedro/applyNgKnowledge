import { Injectable } from "@angular/core";
import { JwtHelperService } from "@auth0/angular-jwt";
import { Observable } from "rxjs";
import { Users } from "../models/users.model";

@Injectable()
export class LoginService {

    jwt?: string;
    users: Users[] = [
        {
            id: 1,
            username: 'nice',
            password: '123456',
        },
        {
            id: 2,
            username: 'brenda',
            password: '0321456',
        }
    ];

    id !: number;
    nom !: string;
    prenom !: string;

    do_login(log: { username: string, password: string }) {
        return <Users>this.users.find((u) => u.username == log.username && u.password == log.password);
    }

    saveToken(jwt: string) {
        localStorage.setItem('_userinfo', jwt);
        this.jwt = jwt;
        this.loadUserInfo();
    }

    loadUserInfo() {
        let jwtHelper = new JwtHelperService()
        let objJWT = jwtHelper.decodeToken(this.jwt);
        this.id = objJWT.sub;
        this.nom = objJWT.name;
        this.prenom = objJWT.iat;
    }
    loadToken() {
        this.jwt = localStorage.getItem('_userinfo') || '';
        if (this.jwt != '') {
            this.loadUserInfo();
        }
    }

    isAuthenticated() {
        this.loadToken();
        return this.id >= 0;
    }


    isTokenExprired(jwt: string): boolean {
        let jwtHelper = new JwtHelperService();
        let time = jwtHelper.getTokenExpirationDate(jwt)
        return jwtHelper.isTokenExpired(jwt)
    }


    getConnectedUser() {
        if (this.isAuthenticated()) {
            this.loadToken();
            return this.nom;
        } else {
            return '';
        }
    }

    logOut() {
        localStorage.removeItem('_userinfo');
        this.initCredentials();
    }

    initCredentials() {
        this.jwt = "";
        this.nom = "";
        this.prenom = '';
    }
}