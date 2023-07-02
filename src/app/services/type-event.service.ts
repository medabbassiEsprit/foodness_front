import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class TypeEventService {
  private apiUrlTypeEvent = 'http://127.0.0.1:3000/eventType/';

  constructor(private http: HttpClient) { }

  addEventType(eventTypeData: any): Observable<any> {
    return this.http.post(this.apiUrlTypeEvent, eventTypeData).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getAllEventTypes(): Observable<any> {
    return this.http.get(this.apiUrlTypeEvent).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  getEventTypeById(eventTypeId: string): Observable<any> {
    const url = `${this.apiUrlTypeEvent}/${eventTypeId}`;
    return this.http.get(url).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  updateEventTypeById(eventTypeId: string, updates: any): Observable<any> {
    const url = `${this.apiUrlTypeEvent}/${eventTypeId}`;
    return this.http.put(url, updates).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }

  deleteEventTypeById(eventTypeId: string): Observable<any> {
    const url = `${this.apiUrlTypeEvent}/${eventTypeId}`;
    return this.http.delete(url).pipe(
      catchError((error: any) => {
        throw error;
      })
    );
  }
}

