import { Component, OnInit } from '@angular/core';
import { Plat } from '../Model/plat';
import { MenuplatService } from '../services/menuplat.service';

@Component({
  selector: 'app-newplat',
  templateUrl: './newplat.component.html',
  styleUrls: ['./newplat.component.css']
})
export class NewplatComponent implements OnInit {

  Plats: Plat []=[];
  constructor(private platConsumer:MenuplatService) { }

  ngOnInit(): void {

    this.platConsumer.getPlats().subscribe({
      next:(data)=>this.Plats=data,
      error:(err) =>{
          console.error(err)
      },complete() {
          console.info('completed')
      },

    })

  }

}
