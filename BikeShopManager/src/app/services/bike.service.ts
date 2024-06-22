import { HttpClient } from '@angular/common/http'; //importo la libreria httpClient
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BikeService {

  //inyectamos un objeto HttpClient
  constructor(private http: HttpClient) { }

  //este metodo nos retornara un JSON con todas las bicicletas cargadas en la
  //base de datos SQLite (es la base a la que se conecta nuestra API )
  getAllBikes() {
    return this.http.get('/server/api/v1/bikes');
  }

  getBikeById(id: number) {
    return this.http.get('/server/api/v1/bikes/' + id);
  }

}
