import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { InterventionsService } from 'src/app/service/interventions.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.page.html',
  styleUrls: ['./intervention.page.scss'],
})
export class InterventionPage implements OnInit {

    listeIntervention : any;
    modal : any;
    apiIntervention = "http://localhost/api/apiGestionInterventions.php";
    idIntervention : number;
    idAnimal : number;
    idTypeIntervention : number; 
    dateIntervention : any;
    duree : any;

  constructor(private httpClient: HttpClient, public InterventionsService:InterventionsService, private routeur:Router) { }

  ngOnInit() {
    this.afficherListeInterventions();
  }

  afficherListeInterventions(){

    this.httpClient.get(this.apiIntervention).subscribe(
      resultat =>
      {
        
        this.listeIntervention = resultat;
        
      },
      erreur =>
      {
        console.log("Erreur"+erreur);
      }
    )
  }
  
}
