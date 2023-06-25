import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import Reply from './model/reply';

@Injectable({
  providedIn: 'root'
})
export class ReplyServiceService {
  private apiUrl = 'http://127.0.0.1:3000/response/'; // Replace with your actual API endpoint

  constructor(private http:HttpClient) { }

  addReply(reply:Reply){
    return this.http.post<Reply>(this.apiUrl, reply);
  }
}
