import { Component, OnInit } from '@angular/core';
import { Plat } from '../Model/plat';
import { MenuPlatService } from '../services/menu.service';
import MenuPlat from '../Model/menu';
import { MenuplatService } from '../services/menuplat.service';

@Component({
  selector: 'app-newmenu',
  templateUrl: './newmenu.component.html',
  styleUrls: ['./newmenu.component.css']
})
export class NewMenuComponent implements OnInit {
  newMenu: MenuPlat = new MenuPlat('', '', [], '', 0);
  listMenu: Plat[]=[];// Array to store the existing plats
  selectedPlat: Plat | undefined;

  constructor(private consumer: MenuplatService, private consumerPl:MenuPlatService) { }
  addSelectedPlat() {
    if (this.selectedPlat) {
      this.newMenu.Plats.push(this.selectedPlat);
      //this.selectedPlat = null; // Reset the selected plat
    }
  }
  ngOnInit(): void {
    // Fetch the list of existing plats
    this.consumer.getPlats().subscribe({
      next:(value)=> (this.listMenu= value),
    })
  }
  addPlat(plat: Plat | undefined): void {
    if (plat) {
      this.newMenu.Plats.push(plat);
    }
  }

  onSubmit(): void {
    console.log("clicked");
    console.log(this.newMenu);
  
    this.consumerPl.createMenuPlat(this.newMenu).subscribe({
      next: (response: any) => {
        console.log('Menu created successfully:', response);
        // Reset the newMenu object
        this.newMenu = new MenuPlat('', '', [], '', 0);;
      },
      error: (err: any) => {
        console.error('Error creating menu:', err);
      }
    });
  }
}
