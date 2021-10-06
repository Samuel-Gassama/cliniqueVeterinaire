import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail-client',
  templateUrl: './detail-client.page.html',
  styleUrls: ['./detail-client.page.scss'],
})
export class DetailClientPage implements OnInit {
  
  apiDetails: string;


  constructor() { }

  ngOnInit() {
  }

  afficherDetails(){

    // this.apiDetails = ""
  }

}
