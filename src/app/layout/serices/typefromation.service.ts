import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TypeFormation } from '../../model/typeformation';

@Injectable({
  providedIn: 'root'
})
export class TypeFormationService {
  private apiUrl = 'http://localhost:3000/typeformation/'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  createFormation(typeformation: TypeFormation): Observable<TypeFormation> {
    return this.http.post<TypeFormation>(`${this.apiUrl}add`, typeformation);
  }
  

  getAllTypeFormation() {
    return this.http.get<TypeFormation[]>(`${this.apiUrl}findAll`);
  }

  getTypeFormationById(id: string): Observable<TypeFormation> {
    const url = `${this.apiUrl}findById/${id}`;
    return this.http.get<TypeFormation>(url);
  }

  deleteTypeFormation(id: string): Observable<TypeFormation> {
    const url = `${this.apiUrl}delete/${id}`;
    return this.http.delete<TypeFormation>(url);
  }

  updateTypeFormation(formation: TypeFormation, id: String): Observable<TypeFormation> {
    const url = `${this.apiUrl}update`;
    return this.http.put<TypeFormation>(url, {
      ...formation,
      id: id,
    });
  }
}