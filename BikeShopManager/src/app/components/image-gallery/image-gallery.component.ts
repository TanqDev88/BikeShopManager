import { Component, OnInit } from '@angular/core';
import { Bike } from '../../models/bike';
import { ImagesService } from '../../services/images.service';

@Component({
  selector: 'app-image-gallery',
  templateUrl: './image-gallery.component.html',
  styleUrls: ['./image-gallery.component.scss']
})
export class ImageGalleryComponent implements OnInit {



  filterBy: string = 'all';

  allImages: Bike[] = [];


  constructor(private imageService: ImagesService) {

    this.allImages = imageService.getImages();

    console.log("todas las imagenes que me retorna el servicio :");
    console.dir(this.allImages);
    console.log("buscamos la imagen con id 6:");
    console.dir(imageService.getImageById(6));

  }

  ngOnInit(): void {

  }

}
