import { Component, OnInit } from '@angular/core';
import { FormationService } from '../serices/formation.service';
import { Formation } from '../../model/formation';
import { ActivatedRoute } from '@angular/router';
import { TypeFormation } from '../../model/typeformation';
import { Quiz } from '../../model/quiz';
import { QuizService } from '../serices/quiz.service';

@Component({
  selector: 'app-gerer-formation',
  templateUrl: './gerer-formation.component.html',
  styleUrls: ['./gerer-formation.component.css'],
})
export class GererFormationComponent implements OnInit {
  formation: Formation;
  idformation: string = '';
  refType: TypeFormation;
  ListeQuizzes: Quiz[];
  constructor(
    private formationService: FormationService,
    private quizService: QuizService,
    private route: ActivatedRoute
  ) {
    this.formation = new Formation();

    this.route.paramMap.subscribe((params) => {
      this.idformation = params.get('id');
      this.formationService
        .getFormationById(params.get('id'))
        .subscribe((data) => {
          this.formation = data;
          this.refType = data.refType;
          console.log(this.formation);
        });
    });
  }

  ngOnInit(): void {
    this.quizService
      .getQuizzesByFormation(this.idformation)
      .subscribe((data) => {
        console.log(data);
        this.ListeQuizzes = data;
      });
  }
}
