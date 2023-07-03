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

  addEvent(event: any, images: string[]): Observable<any> {
    const url = this.apiUrl;
    const formData = new FormData();
    event.imageIds = images;
    formData.append('Titre', event.Titre);
    formData.append('emplacementEvent', event.emplacementEvent);
    formData.append('description', event.description);
    formData.append('dateDeb', event.dateDeb);
    formData.append('dateFin', event.dateFin);
    formData.append('organisateur', event.organisateur);
    formData.append('typeName', event.typeName);
    formData.append('nbrParticipants', event.nbrParticipants.toString());
    formData.append('dateCreation', new Date().toISOString()); // Add the dateCreation property with the current date and time

   // formData.append('idUsers', "1s8t11tezt84e78ys1s8ty44y(");
    //formData.append('refImage', event.refImage);
    for (let i = 0; i < images.length; i++) {
      formData.append('imageId', images[i]);
    }
    /*
    for (let i = 0; i < images.length; i++) {
      formData.append('imageId', images[i]);
    } */
    console.log(images);
      console.log(formData);
    return this.http.post<any>(url, formData);
  }


  getEventById(eventId: string): Observable<any> {
    const url = `${this.apiUrl}${eventId}`;
    return this.http.get<Event>(url);
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
