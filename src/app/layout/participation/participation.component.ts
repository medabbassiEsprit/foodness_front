import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Event } from '../../Model/event'
import { EventService } from '../../services/event.service';
import { on } from 'events';
import { Location } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { access } from 'fs';


@Component({
  selector: 'app-participation',
  templateUrl: './participation.component.html',
  styleUrls: ['./participation.component.css']
})
export class ParticipationComponent implements OnInit {
  eventId!: string;
  event!: Event;
  userId!: string;
  events: any;
  constructor(
    private route: ActivatedRoute,
    private eventService: EventService,
    private location: Location,
    private authService: AuthService
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.eventId = params['eventId'];
      this.fetchEventById(this.eventId);
      this.userId = this.authService.getCurrentUserId(); // Retrieve the user ID from the authentication service

    });
  }

click(){
  console.log("hhhrfrhfc");
}
addUserToEvent(eventId: string, nbrParticipants: number) {

nbrParticipants = nbrParticipants - 1;
  this.eventService.addUserAndDecrementParticipants(eventId,  this.userId,nbrParticipants ).subscribe({
    next: (response) => {
      console.log('User added successfully');
      // Handle the response as needed
    },
    error: (err) => {
      console.log('Error adding user to event:', err);
      // Handle the error as needed
    }
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
  return(): void {
    this.location.back();
  }

}
