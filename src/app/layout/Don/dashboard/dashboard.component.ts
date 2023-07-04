import { Component, OnInit } from '@angular/core';
import { Don } from '../../../model/Don';
import { DonApiService } from '../../../data/don-api.service';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  ListeOfDons: Don[] = []; // Initialize the array with an empty array of Donation objects
  ParticiperIsOpen:boolean = false;
  SelectedDons: Don | undefined;

  constructor(private donApiService: DonApiService) { }

  ngOnInit(): void {
 

   this.refreshData();

  }
  refreshData():void{
    this.donApiService.getDons().subscribe((response: any) => {
      this.ListeOfDons=response;
     });
  }
  getPourcentage(progressValue: number, target: number): number {
    const percentage =(progressValue / target) * 100;
    return Math.round(percentage * 100) / 100; // Round to 2 decimal places

  }
  openParticper(D:Don){
    this.ParticiperIsOpen=true;
    this.SelectedDons=D
  }
  backToTable(){
    this.ParticiperIsOpen=false;
    this.SelectedDons=undefined;
    this.refreshData();


  }
}
