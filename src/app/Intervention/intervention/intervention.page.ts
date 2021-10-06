import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-intervention',
  templateUrl: './intervention.page.html',
  styleUrls: ['./intervention.page.scss'],
})
export class InterventionPage implements OnInit {

    listeIntervention : any;
    modal : any;
    apiIntervention = "http://localhost/apiGestionInterventions.php";

    idIntervention : number;
    idAnimal : number;
    idTypeIntervention : number; 
    dateIntervention : any;
    duree : any;

  constructor(private HttpClient: HttpClient) { }

  ngOnInit() {
  }

}
