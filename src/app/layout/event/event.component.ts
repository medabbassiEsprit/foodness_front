import { Component, OnInit } from '@angular/core';
import { Event } from '../../Model/event';
import { error } from 'console';
import { EventService } from '../../services/event.service';
//import { AuthService } from '../services/auth.service';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];


  constructor(private eventService: EventService, /*private authService: AuthService*/) {

  
      // Initialize the showTooltip property for each event
      this.events.forEach(event => event.showTooltip = false);

  }

  ngOnInit() {
    //this.userId = this.authService.getCurrentUserId(); // Retrieve the user ID from the authentication service

    this.eventService.getAllEvents().subscribe({
      next: (data) => (this.events = data, console.log(data)
            ),
      error: (err) => {
        console.log(err);
      },
      complete: () => console.info('done')
    });
  }

  /*addUserToEvent(eventId: string) {
    const event = this.events.find(e => e._id === eventId);

    if (event) {
      if (!event.idUsers.includes(this.userId)) {
        event.idUsers.push(this.userId);

        this.eventService.addUserToEvent(eventId, { id: this.userId }).subscribe({
          next: (response) => {
            console.log('User added successfully');
            // Handle the response as needed
          },
          error: (err) => {
            console.log('Error adding user to event:', err);
            // Handle the error as needed
          }
        });
      } else {
        console.log('User is already participating in the event');
      }
    } else {
      console.log('Event not found');
    }
  }*/

}
