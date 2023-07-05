import { Component, OnInit } from '@angular/core';
import { Plat } from '../Model/plat';
import { MenuplatService } from '../services/menuplat.service';
import { MenuService } from '../services/menu.service';
import MenuPlat from '../Model/menu';

@Component({
  selector: 'app-clientview',
  templateUrl: './clientview.component.html',
  styleUrls: ['./clientview.component.css']
})
export class ClientviewComponent implements OnInit {
  listplat: Plat[]=[];
  listMenu: MenuPlat[]=[];
    constructor(private consumer:MenuService,private consumerplat:MenuplatService) { }
  ngOnInit(): void {
    this.consumerplat.getPlats().subscribe({
      next:(value)=> (this.listplat= value),
  })
  this.consumer.getMenuPlats().subscribe({
    next:(value)=> (this.listMenu= value),
  })
  }
}
