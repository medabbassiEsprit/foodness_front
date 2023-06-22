import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import Reclamation from '../model/reclamation';

@Injectable({
  providedIn: 'root'
})
export class ReclamationService {
  private apiUrl = 'http://127.0.0.1:3000/rec/'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) { }

  createReclamation(reclamation: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, reclamation);
  }

  getAllReclamations() {
    return this.http.get<Reclamation[]>(this.apiUrl);
  }

  updateReclamation(id: string, reclamation: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, reclamation);
  }

  deleteReclamation(id: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }

  updateReclamationStatus(id: string, status: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}${id}/status`, { status });
  }

  updateReclamationLabel(id: string, recLabel: string): Observable<any> {
    return this.http.patch<any>(`${this.apiUrl}${id}/label`, { recLabel });
  }

  updateReclamationLabelWithPost(id: string, recLabel: string): Observable<any> {
    return this.http.post<any>(`${this.apiUrl}/${id}/label`, { recLabel });
  }

  deleteReclamationsWithLabel(label: string): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/label/${label}`);
  }

  getFilteredReclamations(recLabel: string, recStatus: string): Observable<any> {
    const params = { recLabel, recStatus };
    return this.http.get<any>(`${this.apiUrl}/filter`, { params });
  }

  getReclamationById(id: string): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }
}
