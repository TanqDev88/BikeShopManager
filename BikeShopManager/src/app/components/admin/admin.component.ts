import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike';
import { BikeService } from '../../services/bike.service';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  public bikes: any;


  constructor(private bikeService: BikeService) {
    this.getAllBikes();

  }
  getAllBikes(){
    this.bikeService.getAllBikes().subscribe(
      data => {
        this.bikes = data;
      },
      err => {console.error(err);

      },
      () => console.log('llamada a la api metodo gedbikes() finalizada') 
    )

  }


}
