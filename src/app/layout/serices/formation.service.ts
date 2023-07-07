import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Formation } from '../../model/formation';

@Injectable({
  providedIn: 'root',
})
export class FormationService {
  private apiUrl = 'http://localhost:3000/formation/'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  createFormation(formation: Formation): Observable<Formation> {
    return this.http.post<Formation>(`${this.apiUrl}add`, formation);
  }

  getFormations() {
    return this.http.get<Formation[]>(this.apiUrl);
  }

  getFormationById(id: string): Observable<any> {
    const url = `${this.apiUrl}/findById/${id}`;
    return this.http.get<Formation>(url);
  }

  deleteFormation(id: string): Observable<Formation> {
    const url = `${this.apiUrl}delete/${id}`;
    return this.http.delete<Formation>(url);
  }

  updateFormation(formation: Formation, id: String): Observable<Formation> {
    const url = `${this.apiUrl}update`;
    return this.http.put<Formation>(url, {
      ...formation,
      id: id,
    });
  }
}
