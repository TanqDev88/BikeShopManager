import { HttpClient, HttpHeaders } from '@angular/common/http'; //importo la libreria httpClient
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


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

  createOrUpdateBikeRegistration(bike: any) {
    let body = JSON.stringify(bike);
    return this.http.post('/server/api/v1/bikes' , body , httpOptions);
  }


  deleteBikeById(id: number) {
    return this.http.get('/server/api/v1/bikes/borrar/' + id);
  }

}
