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
  constructor() { }

  ngOnInit() {
  }
//   async enregistrerNouveauClient(){
    
//     console.log(this.nouveauClient.nom);
//     console.log(this.nouveauClient.prenom);
//     console.log(this.nouveauClient.telephone);

//     this.httpClient.get("http://localhost/apiAjoutClient.php?nom=" + this.nouveauClient.nom + "&prenom=" + this.nouveauClient.prenom + "&telephone=" + this.nouveauClient.telephone).subscribe
//     (
//       resultat => { 
//         console.log('Client ajouté avec succès'); 
//         this.annulerClient()      
//       },
//       erreur => {
//         console.log('Erreur' + erreur);
//       }
//     );
//   } 
//   annulerClient() {
//       // Fonction qui permet de fermer la page modale
//       this.modalController.dismiss()
//     } 
// }
}
