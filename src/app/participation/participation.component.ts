import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../Model/event';
import { EventService } from '../services/event.service';
import { on } from 'events';

@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
  eventId!: string;
  event!: Event;

  constructor(
    private route: ActivatedRoute,
    private eventService: EventService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['eventId'];
      this.fetchEventById(this.eventId);
    });
  }

  fetchEventById(eventId: string): void {
    this.eventService.getEventById(eventId).subscribe(
      (event: Event) => {
        this.event = event;

      },
      (error) => {
        console.error(error);
      },

    );
  }
}
