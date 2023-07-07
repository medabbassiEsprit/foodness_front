import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Quiz } from '../../model/quiz';

@Injectable({
  providedIn: 'root',
})
export class QuizService {
  private apiUrl = 'http://localhost:3000/quiz/'; // Replace with your actual API endpoint

  constructor(private http: HttpClient) {}

  getQuizzes(): Observable<Quiz[]> {
    return this.http.get<Quiz[]>(`${this.apiUrl}/findAll`);
  }

  getQuizzesByFormation(id: string): Observable<Quiz[]> {
    const url = `${this.apiUrl}/findByFormation/${id}`;
    return this.http.get<Quiz[]>(url);
  }

  addQuiz(quiz: Quiz): Observable<Quiz> {
    const url = `${this.apiUrl}add`;
    return this.http.post<Quiz>(url, quiz);
  }
}
