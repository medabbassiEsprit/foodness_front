import { Component, OnInit } from '@angular/core';
import { TypeEventService } from '../../services/type-event.service'; // Replace 'path-to-type-event-service' with the actual path to TypeEventService
import { EventType } from '../../Model/eventType'; // Replace 'path-to-event-type-model' with the actual path to the EventType model

@Component({
  selector: 'app-typeevent',
  templateUrl: './typeevent.component.html',
  styleUrls: ['./typeevent.component.css']
})
export class TypeeventComponent implements OnInit {
  eventTypes: EventType[] = [];

  constructor(private typeEventService: TypeEventService) { }

  ngOnInit(): void {
    this.getAllEventTypes();
  }

  getAllEventTypes(): void {
    this.typeEventService.getAllEventTypes().subscribe(
      (eventTypes: EventType[]) => {
        this.eventTypes = eventTypes;
        console.log('Event types:', this.eventTypes);
      },
      (error: any) => {
        console.error('Failed to get event types:', error);
      }
    );
  }

  createEventType(): void {
    const newEventType: EventType = {
      _id: '', // Assign an ID if necessary
      typeName: 'New Event Type',

    };

    this.typeEventService.addEventType(newEventType).subscribe(
      (response: any) => {
        console.log('EventType created successfully:', response);
        // Add the created event type to the local array
        this.eventTypes.push(response.newEventType);
      },
      (error: any) => {
        console.error('Failed to create event type:', error);
      }
    );
  }
  deleteEventType(eventType: EventType): void {
    this.typeEventService.deleteEventTypeById(eventType._id).subscribe(
      (response: any) => {
        console.log('EventType deleted successfully:', response);
        // Remove the deleted event type from the local array
        this.eventTypes = this.eventTypes.filter(e => e._id !== eventType._id);
      },
      (error: any) => {
        console.error('Failed to delete event type:', error);
      }
    );
  }

  modifyAndUpdate(eventType: EventType): void {
    const newTypeName = prompt('Enter the new name for the event type:', eventType.typeName);
    if (newTypeName !== null && newTypeName !== '') {
      // Check if the newTypeName already exists
      const typeNameExists = this.eventTypes.some(e => e.typeName.toLowerCase() === newTypeName.toLowerCase());
      if (typeNameExists) {
        alert('The entered event type name already exists.');
      } else {
        eventType.typeName = newTypeName;
        this.typeEventService.updateEventTypeById(eventType._id, { typeName: newTypeName }).subscribe(
          (response: any) => {
            console.log('EventType updated successfully:', response);
            // Refresh the page to reflect the updated event type
            window.location.reload();
          },
          (error: any) => {
            console.error('Failed to update event type:', error);
          }
        );
      }
    }
  }

}



