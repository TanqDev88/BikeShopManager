import { Component, OnInit } from '@angular/core';
import { BikeService } from 'src/app/services/bike.service';

@Component({
  selector: 'app-view-registration',
  templateUrl: './view-registration.component.html',
  styleUrls: ['./view-registration.component.css']
})
export class ViewRegistrationComponent implements OnInit {
  public bikes: any;

  // 1) inyectar servicio de bikes
  constructor(private bikeService: BikeService) {
  }

  ngOnInit(): void {
    this.getAllBikes();
  }

  getAllBikes() {
    // 2) llamar al servicio de bikes y traer todas las bikes getAllBikes() y guardarlas en un atributo
    this.bikeService.getAllBikes().subscribe(
      data => { this.bikes = data },
      err => { console.error(err) },
      () => console.log('Bikes Loaded')
    )
  }

  deleteBike(id: number) {
    let borrar = confirm("Estas Seguro que quieres eliminar el registro con id : " + id);

    if (borrar) {
      this.bikeService.deleteBikeById(id).subscribe(
        data => {
          if (data) {
            alert("se borro el registro exitosamente");
            this.getAllBikes();
          } else {
            alert("no se borro el registro");
          }
        },
        err => {
          console.error(err);
        },
        () => console.log("Fin Del Request")
      );
    }
  }

}
