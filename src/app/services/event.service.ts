import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../Model/event';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl = 'http://127.0.0.1:3000/event/';

  constructor(private http: HttpClient) {}

  getAllEvents() {
    return this.http.get<Event[]>(this.apiUrl);
  }

  addUserToEvent(eventId: string, user: any): Observable<any> {
    const url = `${this.apiUrl}${eventId}/addUser`;
    return this.http.post<any>(url, user);
  }

  addEvent(event: any, images: File[]): Observable<any> {
    const url = this.apiUrl;
    const formData = new FormData();
    formData.append('name', event.name);
    // Append other event data as needed
    for (let i = 0; i < images.length; i++) {
      formData.append('images', images[i]);
    }
    return this.http.post<any>(url, formData);
  }

  getEventById(eventId: string): Observable<any> {
    const url = `${this.apiUrl}${eventId}`;
    return this.http.get<any>(url);
  }

  updateEventById(eventId: string, updatedEvent: any): Observable<any> {
    const url = `${this.apiUrl}${eventId}`;
    return this.http.put<any>(url, updatedEvent);
  }

  deleteEventById(eventId: string): Observable<any> {
    const url = `${this.apiUrl}${eventId}`;
    return this.http.delete<any>(url);
  }
}
