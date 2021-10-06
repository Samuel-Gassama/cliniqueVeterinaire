import { Injectable } from '@angular/core';
import { Intervention } from '../model/intervention';

@Injectable({
  providedIn: 'root'
})
export class InterventionsService {

  listeIntervention : Array<Intervention>;
  idAnimal : number;
  idTypeIntervention : number;
  dateIntervention : any;
  idIntervention : number;
  idClient : number;

  constructor() { 

    this.listeIntervention=new Array<Intervention>();
  }

  getIdIntervention(idIntervention){
    this.idIntervention = idIntervention;
  }
  setIdIntervention(){
    return this.idIntervention;
  }

  getIdAnimal(idAnimal){
    this.idAnimal = idAnimal;
  }
  setIdAnimal(){
    return this.idAnimal;
  }

  getDateIntervention(dateIntervention){
    this.dateIntervention = dateIntervention;
  }
  setDateIntervention(){
    return this.dateIntervention;
  }

  getIdClient(idClient){
    this.idClient = idClient;
  }
  setIdClient(){
    return this.idClient;
  }
  getidTypeIntervention(){
    this.idTypeIntervention = this.idTypeIntervention;
  }
  setIdTypeIntervention(){
    return this.idTypeIntervention;
  }
}
