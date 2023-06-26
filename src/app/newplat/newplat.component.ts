import { Component, OnInit } from '@angular/core';
import { Plat } from '../Model/plat';
import { MenuplatService } from '../services/menuplat.service';

@Component({
  selector: 'app-newplat',
  templateUrl: './newplat.component.html',
  styleUrls: ['./newplat.component.css']
})
export class NewplatComponent implements OnInit {
  newPlat: Plat = new Plat(); // Create a new instance of the Plat model
  
  constructor(private platConsumer: MenuplatService) { }

  ngOnInit(): void {
    // Initialize the newPlat object with default values or retrieve from the API if needed
  }

  onSubmit(): void {
    console.log("clicked");
    console.log(this.newPlat);
  
    this.platConsumer.createPlat(this.newPlat).subscribe({
      next: (response) => {
        console.log('Plat created successfully:', response);
        // Reset the newPlat object
        this.newPlat = new Plat();
      },
      error: (err) => {
        console.error('Error creating plat:', err);
      }
    });
  }
}
