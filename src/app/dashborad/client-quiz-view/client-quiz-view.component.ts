import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/layout/serices/quiz.service';
import { Quiz } from 'src/app/model/quiz';


@Component({
  selector: 'app-client-quiz-view',
  templateUrl: './client-quiz-view.component.html',
  styleUrls: ['./client-quiz-view.component.css']
})
export class ClientQuizViewComponent implements OnInit {
  quizzes: Quiz[] = [];

  constructor(private quizService: QuizService) { }

  ngOnInit(): void {
    this.fetchQuizzes();
  }

  fetchQuizzes(): void {
    this.quizService.getQuizzes().subscribe(
      (quizzes: Quiz[]) => {
        this.quizzes = quizzes;
      },
      (error) => {
        console.error('Error fetching quizzes:', error);
        // Handle error accordingly
      }
    );
  }
}
