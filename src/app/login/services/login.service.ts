import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { Users } from "../models/users.model";

@Injectable()
export class LoginService {
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

    do_login(log: { username: string, password: string }): boolean {
        let user = <Users>this.users.find(u => { u.username == log.username, u.password == log.password });
        let index = this.users.indexOf(user);
        if (this.users[index]) {
            return true;
        } else {
            return false;
        }
    }

    getAllUsers(): Users[] {
        return this.users;
    }
    getUserById(id: number): Users {
        return <Users>this.users.find(u => u.id === id);
    }

    getUserByUsername(username: string): Users {
        let user = this.users.find(u => u.username === username)
        return <Users>user;

    }

    getUserByPwd(password: string): Users {
        let user = this.users.find(u => u.password === password)
        return <Users>user;

    }
}