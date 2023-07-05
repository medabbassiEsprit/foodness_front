import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import MenuPlat from '../Model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/menuplat'; // Remplacez 'API_URL' par l'URL de votre API

  constructor(private http: HttpClient) { }

  getMenuPlats() {
    const url = `${this.apiUrl}/menuplats`;
    return this.http.get<MenuPlat[]>(url);
  }

  createMenuPlat(menuPlat: MenuPlat): Observable<MenuPlat> {
    const url = `${this.apiUrl}/menuplats`;
    return this.http.post<MenuPlat>(url, menuPlat);
  }

  updateMenuPlat(menuPlat: MenuPlat): Observable<MenuPlat> {
    const url = `${this.apiUrl}/menuplats/${menuPlat._id}`;
    return this.http.put<MenuPlat>(url, menuPlat);
  }

  deleteMenuPlat(id: string): Observable<MenuPlat> {
    const url = `${this.apiUrl}/menuplats/${id}`;
    return this.http.delete<MenuPlat>(url);
  }
}
