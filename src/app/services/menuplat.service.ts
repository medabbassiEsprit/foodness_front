import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Plat } from '../Model/plat';

@Injectable({
  providedIn: 'root'
})
export class MenuplatService {
  private apiUrl = 'http://localhost:3000'; // Update with your API URL
  
  constructor(private http: HttpClient) { }

  createPlat(platData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/plats`, platData);
  }

  getPlats() {
    return this.http.get<Plat[]>(`${this.apiUrl}/plats`);
  }

  getPlatById(platId: string): Observable<any> {
    return this.http.get(`${this.apiUrl}/plats/${platId}`);
  }

  updatePlat(platId: string, platData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/plats/${platId}`, platData);
  }

  deletePlat(platId: string): Observable<any> {
    return this.http.delete(`${this.apiUrl}/plats/${platId}`);
  }
}
