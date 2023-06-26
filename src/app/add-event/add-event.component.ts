import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../Model/event';
import { Router } from '@angular/router';
import { ImageServService } from '../services/image-serv.service';
import { Observable, forkJoin } from 'rxjs';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = new Event();
  images: File[] = []; // Track selected images
  imageUrls: string[] = [];

  constructor(
    private eventService: EventService,
    private router: Router,
    private imageService: ImageServService
  ) {}

  ngOnInit(): void {}

  onFileSelected(event: any) {
    this.images = event.target.files as File[]; // Store the selected images as an array

    if (this.images.length > 0) {
      this.uploadImages().then(
        (imageUrls: string[]) => {
          this.imageUrls = imageUrls;
          // Store the uploaded image URLs
          console.log( this.imageUrls);
        },
        error => {
          console.log( this.imageUrls)
          console.error('Failed to upload images:', error);
          // Handle error
        }
      );
    }
  }

  uploadImages(): Promise<string[]> {
    const imagePromises: Promise<string>[] = [];

    // Upload each image and store the promise
    imagePromises.push(this.imageService.uploadImages(this.images));
    console.log(imagePromises);
    return Promise.all(imagePromises);
  }

  onSubmit() {
    if (this.images.length > 0) {
      const imageUrlsPromise = this.uploadImages(); // This now returns a Promise<string[]>

      imageUrlsPromise.then(
        (imageUrls: string[]) => {
          // Proceed with saving the event and associated image URLs
          this.event.imageIds = imageUrls;
          this.eventService.addEvent(this.event, this.images).subscribe(
            () => {
              console.log('Event created successfully');
              this.router.navigate(['/events']); // Navigate to events page
            },
            error => {
              console.error('Failed to create event:', error);
              // Handle error
            }
          );
        },
        error => {
          console.error('Failed to upload images:', error);
          // Handle error
        }
      );
    } else {
      // No images selected
      // Proceed with saving the event without images
      this.eventService.addEvent(this.event, []).subscribe(
        () => {
          console.log('Event created successfully');
          this.router.navigate(['/events']); // Navigate to events page
        },
        error => {
          console.error('Failed to create event:', error);
          // Handle error
        }
      );
    }
  }
}
