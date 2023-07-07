import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormArray } from '@angular/forms';
import { QuizService } from 'src/app/layout/serices/quiz.service';
import { Formation } from 'src/app/model/formation';
import { Quiz, Questions, User } from 'src/app/model/quiz';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {
  quizForm: FormGroup;
  formations: Formation[] = [];
  responses: FormArray;
  responseList: string[] = []; // Array to store responses

  constructor(
    private formBuilder: FormBuilder,
    private quizService: QuizService
  ) {
    this.quizForm = this.formBuilder.group({
      refFormation: ['', Validators.required],
      titre: ['', Validators.required],
      responses: this.formBuilder.array([])
    });
    this.responses = this.quizForm.get('responses') as FormArray;
  }

  ngOnInit(): void {
    this.fetchFormations();
  }

  fetchFormations(): void {
    this.quizService.getQuizzes().subscribe(
      (quizzes: Quiz[]) => {
        this.formations = quizzes.map((quiz) => quiz.refFormation as Formation);
        // Add the _id property to each formation
        this.formations = this.formations.map((formation) => {
          formation._id = formation._id || '';
          return formation;
        });
      },
      (error) => {
        console.error('Error fetching formations:', error);
      }
    );
  }

  addResponse(): void {
    this.responses.push(this.formBuilder.group({
      value: ['', Validators.required]
    }));
  }

  onSubmit(): void {
    if (!this.quizForm.valid) {
      // Get the responses from the form and store them in the responseList
      this.responseList = this.responses.value.map((response: { value: string }) => response.value);

      // Create a new Quiz instance using form values and the responseList
      const newQuiz: Quiz = new Quiz(
        '',
        this.quizForm.value.refFormation,
        this.quizForm.value.titre,
        this.quizForm.value.responses,
        [],
        0
      );

      // Call the QuizService to add the quiz
      this.quizService.addQuiz(newQuiz).subscribe(
        (addedQuiz: Quiz) => {
          // Handle successful addition of the quiz
          console.log('Quiz added successfully:', addedQuiz);
        },
        (error) => {
          console.error('Error adding quiz:', error);
        }
      );
    } else {
      // Handle form validation errors
    }
  }
}
