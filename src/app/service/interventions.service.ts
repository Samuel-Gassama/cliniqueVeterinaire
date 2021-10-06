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

  constructor() { }
}
