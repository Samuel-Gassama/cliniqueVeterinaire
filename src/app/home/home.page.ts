import { Component, OnInit, Input} from '@angular/core';
import { ClientService } from '../service/client.service';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage implements OnInit {

  @Input() public nom : string;
  @Input() public prenom : string;
  @Input() public telephone: string;

  listeClients : any;
  modal : any;
  apiClient : string ="http://localhost/apiGestionClients.php"

  constructor( private httpClient: HttpClient, public ClientService:ClientService, private routeur:Router) {

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
  }
