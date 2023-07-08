import { Component, OnInit } from '@angular/core';
import { EventService } from '../../services/event.service';
import { Event } from '../../Model/event';
import { Router } from '@angular/router';
import { ImageServService } from '../../services/image-serv.service';
import { EventType } from '../../Model/eventType';
import { TypeEventService } from '../../services/type-event.service';
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
  eventTypes: EventType[] = [];
  isPeriodInvalid = false;

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

  isDatePeriodExceeded(): boolean {
    if (this.event.dateDeb && this.event.dateFin) {
      const startDate = new Date(this.event.dateDeb);
      const endDate = new Date(this.event.dateFin);
      const durationInDays = Math.floor((endDate.getTime() - startDate.getTime()) / (1000 * 3600 * 24));
      return durationInDays > 6;
    }
    return false;
  }

  getCurrentDate(): string {
    const currentDate = new Date();
    return currentDate.toISOString().split('T')[0];
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
          console.log(this.imageUrls);
        },
        error => {
          console.log(this.imageUrls);
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
    if (this.isPeriodInvalid) {
      console.log('Invalid period: Start Date must be before End Date');
      return; // Don't submit the form
    }
    console.log(this.event);
    this.event.dateCreation = new Date();
    this.event.name = this.event.typeName;
    this.eventService.addEvent(this.event, this.imageUrls).subscribe(
      () => {
        console.log('Event created successfully');
        this.router.navigate(['admin/events']);
        this.sendWelcomeEmailToUsers().subscribe(
          () => {
            console.log('Welcome emails sent successfully');
            this.router.navigate(['admin/events']); // Navigate to events page
          },
          error => {
            console.error('Failed to send welcome emails:', error);
            // Handle error
          }
        );
      },
      error => {
        console.error('Failed to create event:', error);
        // Handle error
      }
    );
  }

  sendWelcomeEmailToUsers(): Observable<any> {
    const emails: string[] = []; // Array of user emails, replace with your user emails

    const emailPromises: Observable<any>[] = emails.map(email => {
      return this.eventService.sendWelcomeEmail(email);
    });

    return forkJoin(emailPromises);
  }
}
