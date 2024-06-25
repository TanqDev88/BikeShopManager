import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {
  // demo pipes
  // dateObj : Date = new Date();

  //este atributo se lo enviamos al pipe para filtrar la data
  filterBy: string = 'all';

  allImages: Bike[] = [];

  //inyectamos el servicio de imagenes para poder utilizarlo
  constructor(private imageService: ImagesService) {
    //obtenemos el array desde el service previamente inyectado
    //y lo almacenamos en el atributo de la clase
    this.allImages = imageService.getImages();

    console.log("todas las imagenes que me retorna el servicio :");
    console.dir(this.allImages);
    console.log("buscamos la imagen con id 6:");
    console.dir(imageService.getImageById(6));

  }

  ngOnInit(): void {

  }

}
