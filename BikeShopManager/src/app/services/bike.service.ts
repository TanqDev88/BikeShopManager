import { HttpClient, HttpHeaders } from '@angular/common/http'; //importo la libreria httpClient
import { Injectable } from '@angular/core';

const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};


@Injectable({
  providedIn: 'root'
})
export class BikeService {


  constructor(private http: HttpClient) { }

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
