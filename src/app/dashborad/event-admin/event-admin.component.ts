import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../Model/event';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {
  eventId!:string;
  events: Event []=[];
    constructor(
    private eventService: EventService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.route.paramMap.subscribe(params => {
      this.eventId = params.get('eventId')!;
      this.getAllEvents();
      this.getEvent(this.eventId);
    });
  }

  getAllEvents() {
    this.eventService.getAllEvents().subscribe(
      (data) => {
        this.events = data;
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  deleteEvent(eventId: string) {
    this.eventService.deleteEventById(eventId).subscribe(
      () => {
        // Event deleted successfully, update the event list
        this.getAllEvents();
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  getEvent(eventId: string) {
    this.eventService.getEventById(eventId).subscribe(
      (data) => {
        // Handle the retrieved event data as needed
        console.log(data);
      
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }
}
