import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import MenuPlat from '../Model/menu';

@Injectable({
  providedIn: 'root'
})
export class MenuService {
  private apiUrl = 'http://localhost:3000/menuplat'; // Replace 'API_URL' with the URL of your API

  constructor(private http: HttpClient) { }

  getMenuPlats(): Observable<MenuPlat[]> {
    const url = `${this.apiUrl}/menuplats`;
    return this.http.get<MenuPlat[]>(url);
  }

createMenuPlat(menuPlat: MenuPlat, image?: File) {
  console.log(menuPlat);
  console.log(image!.name);

  const formData = new FormData();
  if (image) {
    formData.append('image', image, image.name);
  }
  formData.append('NomduMenu', menuPlat.NomduMenu);
  formData.append('Plats', JSON.stringify(menuPlat.Plats));
  formData.append('Description', menuPlat.Description || '');
  formData.append('Prix', menuPlat.Prix.toString());

  const headers = new HttpHeaders({ 'Content-Type': 'multipart/form-data;' });
  console.log(formData);
  return this.http.post<MenuPlat>(`${this.apiUrl}/menuplats `, formData);
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
