import { Injectable } from "@angular/core";

@Injectable()
export class AuthService {
    private token !: string;
    login() {
        this.token = "NG123456";
    }

    getToken(): string {
        return this.token;
    }
}