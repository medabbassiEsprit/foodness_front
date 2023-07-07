import { Component, OnInit } from '@angular/core';
import { Formation } from '../../model/formation';
import { FormationService } from '../../layout/serices/formation.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeFormationService } from 'src/app/layout/serices/typefromation.service';
import { TypeFormation } from 'src/app/model/typeformation';

@Component({
  selector: 'app-add-formation',
  templateUrl: './add-formation.component.html',
  styleUrls: ['./add-formation.component.css']
})
export class AddFormationComponent implements OnInit {
    formationForm!: FormGroup;
    Liste_TypeFormation:TypeFormation[]=[];
  constructor(
    private formationService: FormationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private typeFormationService:TypeFormationService
  ) { }

  ngOnInit(): void {
    this.typeFormationService.getAllTypeFormation().subscribe((data)=>{console.log(data); 
      this.Liste_TypeFormation=data})
      this.initializeForm();

  }

  initializeForm(): void {
    this.formationForm = this.formBuilder.group({
      libelle: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      refType: ['', Validators.required]
    });
  }

  createFormation(): void {
    if (this.formationForm.valid) {
      const formation: Formation = this.formationForm.value;
      this.formationService.createFormation(formation).subscribe(
        (response) => {
          console.log('Formation created successfully:', response);
          // Perform any additional actions after formation creation
          this.router.navigate(['/admin/formation']);

        },
        (error) => {
          console.error('Error creating formation:', error);
          // Handle error accordingly
        }
      );
    }
  }
}
