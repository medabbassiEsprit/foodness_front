import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Reply from './model/reply';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root'
})
export class ReplyServiceService {
  private apiUrl = 'http://127.0.0.1:3000/response/'; // Replace with your actual API endpoint

  constructor(private http:HttpClient) { }

  addReply(reply:Reply){
    return this.http.post<Reply>(this.apiUrl, reply);
  }

  getReplies(userId: string, recId: string): Observable<Reply> {
    const url = `${this.apiUrl}${userId}/${recId}`;
    return this.http.get<Reply>(url);
  }
}
