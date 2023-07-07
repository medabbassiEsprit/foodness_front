import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TypeFormationService } from 'src/app/layout/serices/typefromation.service';
import { TypeFormation } from 'src/app/model/typeformation';

@Component({
  selector: 'app-update-type-formation',
  templateUrl: './update-type-formation.component.html',
  styleUrls: ['./update-type-formation.component.css']
})
export class UpdateTypeFormationComponent implements OnInit {
  @Input() Typeformation: TypeFormation | undefined;
  @Output() notifyParent: EventEmitter<void> = new EventEmitter<void>();
  typeformationForm: FormGroup;

  constructor(
    private typeformationService: TypeFormationService,
    private formBuilder: FormBuilder  ) {
    this.typeformationForm = this.formBuilder.group({
      libelle: [this.Typeformation?.libelle || '', Validators.required],
    });
  }

  ngOnInit(): void {
    console.log("hello")
    this.populateForm();
    
  }

  populateForm(): void {
    if (this.Typeformation) {
      this.typeformationForm.patchValue({
        libelle: this.Typeformation.libelle,
       
      });
    }
  }


  

  updateFormation(): void {
    if (!this.Typeformation) return;
    console.log(this.Typeformation, this.typeformationForm.value);

    if (this.typeformationForm.valid) {
      const updatedFormation: TypeFormation = this.typeformationForm.value;
      updatedFormation._id = this.Typeformation._id;

      this.typeformationService.updateTypeFormation(updatedFormation,updatedFormation._id)
        .subscribe(
          (response) => {
            console.log('Formation updated successfully:', response);
            // Perform any additional actions after formation update
            this.notifyParent.emit();
          },
          (error) => {
            console.error('Error updating formation:', error);
            // Handle error accordingly
          }
        );
    }
  }
}

