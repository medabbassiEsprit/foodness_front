import { Component, OnInit } from '@angular/core';
import { TypeEventService } from '../services/type-event.service';
import { EventType } from '../Model/eventType';

@Component({
  selector: 'app-add-type-event',
  templateUrl: './add-type-event.component.html',
  styleUrls: ['./add-type-event.component.css']
})
export class AddTypeEventComponent implements OnInit {
  eventType: EventType = new  EventType();

  constructor(private typeEventService: TypeEventService) { }

  ngOnInit(): void {}

  addEventType(): void {
    this.typeEventService.addEventType(this.eventType).subscribe(
      (response: any) => {
        console.log('EventType added successfully:', response);
        // Reset the form and clear the input fields
       
      },
      (error: any) => {
        console.error('Failed to add event type:', error);
      }
    );
  }
}
