export class Intervention {

    public idIntervention : number;
    public idAnimal : number;
    public idTypeIntervention : number;
    public dateIntervention : any;
    public duree : any;

    constructor(idIntervention : number, idAnimal : number, idTypeIntervention : number, dateIntervention : any, duree : any){
        this.idIntervention = idIntervention;
        this.idAnimal = idAnimal;
        this.idTypeIntervention = idTypeIntervention;
        this.dateIntervention = dateIntervention;
        this.duree = duree;
    }
}