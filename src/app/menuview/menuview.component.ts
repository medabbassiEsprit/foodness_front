import { Component, OnInit } from '@angular/core';

import { MenuplatService } from '../services/menuplat.service';
import MenuPlat from '../Model/menu';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-platview',
  templateUrl: './menuview.component.html',
  styleUrls: ['./menuview.component.css']
})
export class MenuviewComponent implements OnInit {
listMenu: MenuPlat[]=[];
  constructor(private consumer:MenuService) { }

  ngOnInit(): void {

    this.consumer.getMenuPlats().subscribe({
      next:(value)=> (this.listMenu= value),
    })
    
  }
}