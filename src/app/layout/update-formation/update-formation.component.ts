import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Formation } from '../../model/formation';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { TypeFormation } from '../../model/typeformation';
import { FormationService } from '../serices/formation.service';
import { TypeFormationService } from '../serices/typefromation.service';

@Component({
  selector: 'app-update-formation',
  templateUrl: './update-formation.component.html',
  styleUrls: ['./update-formation.component.css'],
})
export class UpdateFormationComponent implements OnInit {
  @Input() formation: Formation | undefined;
  @Output() notifyParent: EventEmitter<void> = new EventEmitter<void>();
  formationForm: FormGroup;
  listeTypeFormation: TypeFormation[] = [];

  constructor(
    private formationService: FormationService,
    private formBuilder: FormBuilder,
    private router: Router,
    private typeFormationService: TypeFormationService
  ) {
    this.formationForm = this.formBuilder.group({
      libelle: [this.formation?.libelle || '', Validators.required],
      dateDebut: [this.formation?.dateDebut || '', Validators.required],
      dateFin: [
        this.formation?.dateFin ? this.formation?.dateFin : '',
        Validators.required,
      ],
      refType: [
        this.listeTypeFormation.find(
          (f) => f._id === this.formation?.refType
        ) || null,
        Validators.required,
      ],
    });
  }

  ngOnInit(): void {
    this.populateForm();
    this.fetchTypeFormations();
  }

  populateForm(): void {
    if (this.formation) {
      this.formationForm.patchValue({
        libelle: this.formation.libelle,
        dateDebut: this.formation.dateDebut,
        dateFin: this.formation.dateFin,
        refType: this.formation.refType,
      });
    }
  }

  fetchTypeFormations(): void {
    this.typeFormationService.getAllTypeFormation().subscribe(
      (data: TypeFormation[]) => {
        this.listeTypeFormation = data;
      },
      (error) => {
        console.error('Error fetching type formations:', error);
        // Handle error accordingly
      }
    );
  }

  updateFormation(): void {
    if (!this.formation) return;
    console.log(this.formation, this.formationForm.value);

    if (this.formationForm.valid) {
      const updatedFormation: Formation = this.formationForm.value;
      updatedFormation._id = this.formation._id;

      this.formationService
        .updateFormation(updatedFormation, updatedFormation._id)
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
