import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../Model/event';
import { Router } from '@angular/router';
import { ImageServService } from '../services/image-serv.service';
import { EventType } from '../Model/eventType';
import { TypeEventService } from '../services/type-event.service';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = new Event();
  images: File[] = []; // Track selected images
  imageUrls: string[] = [];
  eventTypes: EventType[] = [];


  constructor(
    private eventService: EventService,
    private router: Router,
    private imageService: ImageServService,
    private typeEventService: TypeEventService
  ) {}

  ngOnInit(): void {
    this.typeEventService.getAllEventTypes().subscribe(
      (eventTypes: EventType[]) => {
        this.eventTypes = eventTypes;
        console.log('Event types:', this.eventTypes);
      }
    );
  }
  onTypeSelect(event: any): void {
    const selectedValue = event.target.value;
    this.event.typeName = selectedValue;
  }


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



  onSubmit(): void {
    console.log(this.event);
 this.event.name = this.event.typeName;
    this.eventService.addEvent(this.event,  this.imageUrls).subscribe(
      () => {
        console.log('Event created successfully');
        this.router.navigate(['/events']); // Navigate to events page
      },
      error => {
        console.log(this.event.typeName);
        console.error('Failed to create event:', error);
        // Handle error
      }
    );
  }
}
