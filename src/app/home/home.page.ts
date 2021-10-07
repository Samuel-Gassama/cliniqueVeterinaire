import { Component, OnInit, Input} from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
import { AjoutClientPage } from '../modal/ajout-client/ajout-client.page';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  listeClients : any;
  modal : any;
  apiClient : string ="http://localhost/api/apiGestionClients.php"

  constructor( public httpClient: HttpClient, public ClientService:ClientService, private routeur:Router, private modalAjoutClient: ModalController) {

              } 

  ngOnInit(){
    this.afficherClient();
    }

    afficherClient(){
      this.httpClient.get(this.apiClient).subscribe(
        resultat =>
        {
          
          this.listeClients = resultat;
          
        },
        erreur =>
        {
          console.log("Erreur"+erreur);
        }
      )

    }
    async ajoutClient(){
      this.modal = await this.modalAjoutClient.create({
        component: AjoutClientPage,
        componentProps: {
          //'nom' : String,
          //'prenom' : String,
          //'telephone' : String,
          //'geolocalisation': String
        }
      });
      this.modal.present();
      this.modal.onDidDismiss().then(data=>{
        this.afficherClient();
      })
    }
  }
