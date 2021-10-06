export class Client{
    public nom: string;
    public prenom:string;
    public telephone:string;
    public id : number;

    constructor(nom:string, prenom:string, telephone:string,id :number){
        this.nom=nom;
        this.prenom=prenom;
        this.telephone=telephone;
        this.id = id;
    }
}