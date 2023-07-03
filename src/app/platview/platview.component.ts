import { Component, OnInit } from '@angular/core';
import MenuPlat from '../Model/menu';
import { MenuplatService } from '../services/menuplat.service';
import { Plat } from '../Model/plat';

@Component({
  selector: 'app-platview',
  templateUrl: './platview.component.html',
  styleUrls: ['./platview.component.css']
})
export class PlatviewComponent implements OnInit {
listMenu: Plat[]=[];
  constructor(private consumer:MenuplatService) { }

  ngOnInit(): void {

    this.consumer.getPlats().subscribe({
      next:(value)=> (this.listMenu= value),
    })
    
  }

}
