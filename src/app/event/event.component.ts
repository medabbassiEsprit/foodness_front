import { Component, OnInit } from '@angular/core';
import { Event } from '../Model/event';
import { error } from 'console';
import 'bootstrap'; // Import Bootstrap JavaScript
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {}

  ngOnInit() {
    this.eventService.getAllEvents().subscribe({
      next: (data) => (this.events = data),
      error: (err) => {
        console.log(err);
      },
      complete: () => console.info('done')
    });
  }
}
