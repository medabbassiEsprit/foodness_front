import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Don } from '../../../model/Don';
import { DonApiService } from '../../../data/don-api.service';
import { Plat } from '../../../model/Plat';

@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css'],
})
export class ParticiperComponent implements OnInit {
  @Input()
  don: Don;
  @Output() afterSubmitForm: EventEmitter<void> = new EventEmitter<void>();

  resto: string = '6488dfefc8f1d53b0fa128c7';
  isMaxError: boolean = false;
  progress: number = 0;
  ParticiperForm: FormGroup;
  ListePlats = [];

  getPourcentage(
    progressValue: number | undefined,
    target: number | undefined
  ): number {
    if (progressValue && target) {
      const percentage = (progressValue / target) * 100;
      return Math.round(percentage * 100) / 100; // Round to 2 decimal places
    } else {
      return 0;
    }
  }
  constructor(private donApiService: DonApiService) {
    this.ParticiperForm = new FormGroup({
      quantite: new FormControl('', [Validators.required, Validators.min(1)]),
      platSelect: new FormControl('', []),
    });
  }

  ngOnInit(): void {
    this.progress = this.getPourcentage(
      this.don?.ProgessValue,
      this.don?.Target
    );
    if (this.don.RefTypeOfDon.name == 'plats') {
      this.donApiService.findPlats().subscribe((data) => {
        this.ListePlats = data;
        console.log(data);
      });
    }
  }
  onSubmit() {
    if (!this.don) return;

    const formData = this.ParticiperForm.value;
    console.log(formData);
    const value = this.don?.Target - this.don?.ProgessValue;

    if (formData.quantite > value) {
      this.isMaxError = true;
    } else {
      if (this.don.RefTypeOfDon.name == 'money') {
        this.donApiService
          .participer(this.resto, this.don?._id, formData.quantite)
          .subscribe((data) => {
            console.log(data);

            this.afterSubmitForm.emit();
          });
      } else {
        this.donApiService
          .participer(
            this.resto,
            this.don._id,
            formData.quantite,
            formData.platSelect
          )
          .subscribe((data) => {
            console.log(data);
            this.afterSubmitForm.emit();
          });
      }
    }
  }
}
