import { Component, OnInit } from '@angular/core';

import { ReclamationService } from '../data/reclamation.service';

@Component({
  selector: 'app-view-reclamation',
  templateUrl: './view-reclamation.component.html',
  styleUrls: ['./view-reclamation.component.css']
})
export class ViewReclamationComponent implements OnInit {

  reclamationList: Reclamation []=[];
  constructor(private reclamationConsumer:ReclamationService) { }

  ngOnInit(): void {
      this.reclamationConsumer.getAllReclamations().subscribe({
        next:(data)=>this.reclamationList= data,
        error:(err) =>{
            console.error(err)
        },complete() {
            console.info('completed')
        },

      })

  }

}
