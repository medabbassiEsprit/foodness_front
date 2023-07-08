import { Component, EventEmitter, Output } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import { Offre } from '../../model/Offre'; // Replace 'path-to-offre-interface' with the actual path to your Offre interface
import { OffreApiService } from '../../data/offre-api.service';

@Component({
  selector: 'app-add-offre',
  templateUrl: './add-offre.component.html',
  styleUrls: ['./add-offre.component.css'],
})
export class AddOffreComponent {
  offreForm: FormGroup;
  @Output() offreAdded = new EventEmitter();

  constructor(
    private formBuilder: FormBuilder,
    private offreApiService: OffreApiService
  ) {
    this.offreForm = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      list_plat: this.formBuilder.array([], Validators.minLength(1)),
    });
  }

  get listPlatControls() {
    return this.offreForm.get('list_plat') as FormArray;
  }

  addPlat() {
    const platGroup = this.formBuilder.group({
      name: ['', Validators.required],
      description: ['', Validators.required],
      quantity: [0, Validators.required],
    });

    this.listPlatControls.push(platGroup);
  }

  removePlat(index: number) {
    this.listPlatControls.removeAt(index);
  }

  submitForm() {
    if (this.offreForm.valid) {
      const newOffre: Offre = {
        name: this.offreForm.value.name,
        description: this.offreForm.value.description,
        list_plat: this.offreForm.value.list_plat,
      };
      this.offreApiService
        .AddOffre(newOffre)
        .subscribe(() => this.offreAdded.emit());

      // TODO: Handle the logic to save the newOffre object
    } else {
      console.log(this.offreForm.errors);
    }
  }
}
