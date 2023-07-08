import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Offre } from '../model/Offre';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class OffreApiService {
  apiUrl: string = 'http://localhost:3000/offre/';

  constructor(private http: HttpClient) {}
  getOffres(): Observable<Offre[]> {
    return this.http.get<Offre[]>(`${this.apiUrl}getAll`);
  }
  AddOffre(offre: Offre) {
    return this.http.post(`${this.apiUrl}create`, {
      name: offre.name,
      description: offre.description,
      list_plat: offre.list_plat,
    });
  }
  delete(id: string) {
    return this.http.delete(`${this.apiUrl}delete/${id}`);
  }
}
