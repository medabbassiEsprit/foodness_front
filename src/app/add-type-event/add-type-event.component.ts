import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { TypeEventService } from '../services/type-event.service';
import { EventType } from '../Model/eventType';
@Component({
  selector: 'app-add-type-event',
  templateUrl: './add-type-event.component.html',
  styleUrls: ['./add-type-event.component.css']
})
export class AddTypeEventComponent {
  eventType: EventType = new EventType();
  isEventTypeExists: boolean = false;

  constructor(private typeEventService: TypeEventService, private location: Location) {}

  addEventType(): void {
    this.typeEventService.getAllEventTypes().subscribe(
      (eventTypes: EventType[]) => {
        const existingEventType = eventTypes.find(e => e.typeName === this.eventType.typeName);
        if (existingEventType) {
          console.log('Event type already exists:', this.eventType.typeName);
          this.isEventTypeExists = true; // Set the property to true if the event type exists
          return;
        }

        this.typeEventService.addEventType(this.eventType).subscribe(
          (response: any) => {
            console.log('EventType added successfully:', response);
            // Reset the form and clear the input fields
            this.eventType = new EventType(); // Assuming EventType is a class or interface to represent the event type
            this.isEventTypeExists = false; // Reset the property after successful addition
            this.location.back();
          },
          (error: any) => {
            console.error('Failed to add event type:', error);
          }
        );
      },
      (error: any) => {
        console.error('Failed to get event types:', error);
      }
    );
  }
}
