import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class DonApiService {
  private apiUrl = 'http://localhost:3000/dons/';

  constructor(private http: HttpClient) {}

  getDons() {
    return this.http.get(`${this.apiUrl}findAll`);
  }
  participer(resto: string, donId: string, quantite: number) {
    return this.http.post(`${this.apiUrl}Participer`, {
      resto: resto,
      donId: donId,
      quantite: quantite,
    });
  }
}
