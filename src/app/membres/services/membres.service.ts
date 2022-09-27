import { Injectable } from "@angular/core";
import { Membre } from "../models/membres.model";

@Injectable()
export class MembresService {
    users: Membre[] = [
        {
            id: 1,
            nom: 'NIZIGIYIMANA',
            prenom: 'Cédric',
            username: 'nice',
            password: '123456',
            createdDate: new Date(),
            birthday: new Date('1996-03-27'),
        },
        {
            id: 2,
            nom: 'MUTOWINTORE',
            prenom: 'Brenda',
            username: 'brenda',
            password: '032145',
            createdDate: new Date(),
            birthday: new Date('1996-08-14'),
        }
    ];

    getAllMembres(): Membre[] {
        return this.users;
    }
    getMemberById(id: number): Membre {
        return <Membre>this.users.find(u => u.id === id);
    }

    updateMembre(id: number, membre: { nom: string, prenom: string }): void {
        // this.users.find(val => val.id == id)?.nom = membre.nom;

        let user = <Membre>this.users.find(val => val.id == id);
        let index = this.users.indexOf(user);
        this.users[index].nom = membre.nom;
        this.users[index].prenom = membre.prenom;
        console.log(this.users[index]);
    }
}