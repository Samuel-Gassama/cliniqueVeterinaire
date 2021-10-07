import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ClientService } from '../service/client.service';
import { Client } from '../model/client';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.page.html',
  styleUrls: ['./detail-client.page.scss'],
})
export class DetailClientPage implements OnInit {

  apiUrl : string;
  idClient : number;
  client : Client;
  listeDetail : any;

  constructor(public httpClient : HttpClient, public clientService : ClientService, public routeur : Router) {

      this.client = new Client("","","","");
   }

  ngOnInit() {
    this.afficherDetailClient();
  }

  afficherDetailClient(){
      this.idClient= this.clientService.getIdClient();
      this.apiUrl= "http://localhost/api/apiGestionClients.php?recherche=" + this.idClient;
      this.httpClient.get(this.apiUrl).subscribe(
        resultat =>
        {
          console.log(resultat);
          this.listeDetail = resultat;
          
  
        },
        erreur =>
        {
          console.log("Erreur"+erreur);
        }
      )}

    Home(){
      this.routeur.navigateByUrl('/home');
    }
  }


