import { Component, OnInit } from '@angular/core';
import { Client } from 'src/app/model/client';
import { HttpClient } from '@angular/common/http';
import { ModalController } from '@ionic/angular';
@Component({
  selector: 'app-ajout-client',
  templateUrl: './ajout-client.page.html',
  styleUrls: ['./ajout-client.page.scss'],
})
export class AjoutClientPage implements OnInit {

    nouveauClient : Client;
    
  constructor(private HttpClient: HttpClient, private modalController: ModalController) { }

  ngOnInit() {
    this.nouveauClient = new Client(" "," "," ");

  }
  async enregistrerNouveauClient(){
    
    console.log(this.nouveauClient.nom);
    console.log(this.nouveauClient.prenom);
    console.log(this.nouveauClient.telephone);


    this.HttpClient.get("https://cors-anywhere.herokuapp.com/http://localhost/api/apiAjoutClient.php?nom=" + this.nouveauClient.nom + "&prenom=" + this.nouveauClient.prenom + "&telephone=" + this.nouveauClient.telephone).subscribe
    (
      resultat => { 
        console.log('Un nouveau client à été ajouté'); 
        this.quitterAjoutClient()      
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
  } 

  async supprimerClient(){
    
    this.HttpClient.delete("https://cors-anywhere.herokuapp.com/http://localhost/api/apiAjoutClient.php?nom=" + this.nouveauClient.nom + "&prenom=" + this.nouveauClient.prenom + "&telephone=" + this.nouveauClient.telephone).subscribe
    (
      resultat => { 
        console.log('Un client à été supprimé '); 
        this.quitterAjoutClient()      
      },
      erreur => {
        console.log('Erreur' + erreur);
      }
    );
  } 
  quitterAjoutClient() {
      // Fonction qui permet de fermer la page modale
      this.modalController.dismiss()
    } 
}

