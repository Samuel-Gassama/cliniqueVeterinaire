export class Client{
    public nom: string;
    public prenom:string;
    public telephone:string;
    // public id : number;
    public geolocalisation: string;

    constructor(nom:string, prenom:string, telephone:string,geolocalisation: string){ 
        
        this.nom=nom;
        this.prenom=prenom;
        this.telephone=telephone;
        // this.id = id;
         this.geolocalisation = geolocalisation;
    }
}