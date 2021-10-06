export class Animal {

    public idClient : number;
    public nom : string;
    public id : number;
    public dateNaiss : Date;

    constructor(nom:string, idClient:number, id:number, dateNaiss:Date){
        this.nom = nom;
        this.idClient = idClient;
        this.id = id;
        this.dateNaiss = dateNaiss;
    }
}