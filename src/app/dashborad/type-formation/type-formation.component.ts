import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/layout/serices/formation.service';
import { TypeFormationService } from 'src/app/layout/serices/typefromation.service';
import { TypeFormation } from 'src/app/model/typeformation';

@Component({
  selector: 'app-type-formation',
  templateUrl: './type-formation.component.html',
  styleUrls: ['./type-formation.component.css']
})
export class TypeFormationComponent implements OnInit {

  TypeFormationForm!: FormGroup;
    
  constructor(
    private typeformationService: TypeFormationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private typeFormationService:TypeFormationService
  ) { }

  ngOnInit(): void {
    this.typeFormationService.getAllTypeFormation().subscribe((data)=>{console.log(data); 
      })
      this.initializeForm();

  }

  initializeForm(): void {
    this.TypeFormationForm = this.formBuilder.group({
      libelle: ['', Validators.required],
    
    });
  }

  createFormation(): void {
    if (this.
      TypeFormationForm.valid) {
      const formation: TypeFormation = this.TypeFormationForm.value;
      this.typeformationService.createFormation(formation).subscribe(
        (response) => {
          console.log('Formation created successfully:', response);
          // Perform any additional actions after formation creation
          this.router.navigate(['admin/viewTypeFormation']);

        },
        (error) => {
          console.error('Error creating formation:', error);
          // Handle error accordingly
        }
      );
    }
  }

}
