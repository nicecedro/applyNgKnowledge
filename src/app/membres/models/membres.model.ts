export interface Membre {
    id: number;
    nom: string;
    prenom: string;
    username: string;
    password: string;
    createdDate: Date;
    birthday?: Date;

}