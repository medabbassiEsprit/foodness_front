import { Component, OnInit } from '@angular/core';
import { Plat } from '../Model/plat';
import MenuPlat from '../Model/menu';
import { MenuplatService } from '../services/menuplat.service';
import { MenuService } from '../services/menu.service';

@Component({
  selector: 'app-newmenu',
  templateUrl: './newmenu.component.html',
  styleUrls: ['./newmenu.component.css']
})
export class NewMenuComponent implements OnInit {
  newMenu: MenuPlat = new MenuPlat('', '', [], '', 0);
  listMenu: Plat[] = []; // Array to store the existing plats
  selectedPlat: Plat | undefined;
  selectedImage!: File;

  constructor(private consumer: MenuplatService, private consumerPl: MenuService) { }

  addSelectedPlat() {
    if (this.selectedPlat) {
      this.newMenu.Plats.push(this.selectedPlat);
      //this.selectedPlat = null; // Reset the selected plat
    }
  }

  ngOnInit(): void {
    // Fetch the list of existing plats
    this.consumer.getPlats().subscribe({
      next: (value) => (this.listMenu = value),
    });
  }

  addPlat(plat: Plat | undefined): void {
    if (plat) {
      this.newMenu.Plats.push(plat._id);
    }
  }



  onImageChange(event: any) {
    const files = event.target.files;
    if (files && files.length > 0) {
      this.selectedImage = files[0];
    // Set the imageUrl field to the image file name
    } 
  }
  

  onSubmit(): void {
    console.log("clicked");
    console.log(this.newMenu);

    this.consumerPl
      .createMenuPlat(this.newMenu, this.selectedImage)
      .subscribe({
        next: (response: any) => {
          console.log('Menu created successfully:', response);
          // Reset the newMenu object
       
        },
        error: (err: any) => {
          console.error('Error creating menu:', err);
        },
      });
  }
}
