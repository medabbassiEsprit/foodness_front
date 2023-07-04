import { Component, Input, OnInit, Output,EventEmitter  } from '@angular/core';
import { FormGroup, FormControl } from '@angular/forms';
import { Don } from '../../../model/Don';
import { DonApiService } from '../../../data/don-api.service';

@Component({
  selector: 'app-participer',
  templateUrl: './participer.component.html',
  styleUrls: ['./participer.component.css']
})
export class ParticiperComponent implements OnInit {
  @Input() 
  don:Don|undefined
  @Output() afterSubmitForm: EventEmitter<void> = new EventEmitter<void>();

  resto:string="6488dfefc8f1d53b0fa128c7"
  progress:number = 0;
  ParticiperForm = new FormGroup({
    quantite: new FormControl('quantite'),
  });
  getPourcentage(progressValue: number|undefined, target: number|undefined): number {
    if(progressValue&&target){
    const percentage =(progressValue / target) * 100;
    return Math.round(percentage * 100) / 100; // Round to 2 decimal places
    }else {
      return 0
    }
  }
  constructor(private donApiService: DonApiService) { }

  ngOnInit(): void {
    this.progress=this.getPourcentage(this.don?.ProgessValue,this.don?.Target);

  }
  onSubmit(){
    const formData = this.ParticiperForm.value;
    console.log(formData);
    console.log(this.don?._id)
    if(this.don)
    this.donApiService.participer(this.resto,this.don?._id,formData.quantite).subscribe(data => {
      console.log(data);
    
      this.afterSubmitForm.emit();
    })


    }

}
