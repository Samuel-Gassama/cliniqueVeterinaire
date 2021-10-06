import { Injectable } from '@angular/core';
import { Client } from '../model/client';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ClientService {

  listeClients : Array<Client>
  nom: string;
  prenom:string;
  telephone:string;
  id: number;


  constructor(private httpClient: HttpClient,HttpClientModule : HttpClientModule) { 

    this.listeClients=new Array<Client>();
  }
  getNomClient(nom){
    this.nom = nom;
  }

  setNomClient(){
    return this.nom;
  }

  getPrenomClient(prenom){
    this.prenom = prenom;
  }

  setPrenomClient(){
    return this.prenom;
  }

  getTelephoneClient(telephone){
    this.telephone = telephone;
  }

  setTelephoneClient(){
    return this.telephone;
  }

  getIdClient(){
    return this.id;
  }

  setIdClient(id){
    this.id = id;
  }

}
