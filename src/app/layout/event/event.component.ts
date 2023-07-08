import * as bootstrap from 'bootstrap';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Event } from '../../Model/event';
import { error } from 'console';
import { EventService } from '../../services/event.service';
import { AuthService } from '../../services/auth.service';
import { FormControl } from '@angular/forms';
import { debounceTime, distinctUntilChanged } from 'rxjs/operators';
import { Router } from '@angular/router';
@Component({
  selector: 'app-event',
  templateUrl: './event.component.html',
  styleUrls: ['./event.component.css']
})
export class EventComponent implements OnInit {
  events: Event[] = [];
  searchResults: Event[] = [];
  userId!: string;
  @ViewChild('toast') toastElement!: ElementRef;



  constructor(private eventService: EventService, private authService: AuthService, private router: Router) {


      // Initialize the showTooltip property for each event
      this.events.forEach(event => event.showTooltip = false);

  }

  ngOnInit() {
  this.userId = this.authService.getCurrentUserId(); // Retrieve the user ID from the authentication service

      this.eventService.getAllEvents().subscribe({
        next: (data) => {
          this.events = data;
          console.log('Events:', this.events);
          this.events.forEach((event) => {
            event.isFlickering = event.nbrParticipants >= 3; // Set flickering based on the condition
          });
        },
        error: (err) => {
          console.log(err);
        },
        complete: () => console.info('done')
      });
    }
  ngAfterViewInit() {
    const toast = this.toastElement.nativeElement;
    const toastInstance = new bootstrap.Toast(toast);
    toastInstance.show();
    console.log('Toast shown');


  }

  addUserToEvent(eventId: string,nbrParticipants: number) {

    nbrParticipants = nbrParticipants - 1;

        this.eventService.addUserAndDecrementParticipants(eventId,  this.userId, nbrParticipants).subscribe({
          next: (response) => {
            console.log('User added successfully');
            window.location.reload();
            // Handle the response as needed
          },
          error: (err) => {
            console.log('Error adding user to event:', err);
            // Handle the error as needed
          }
        });


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
  searchEvents(event: any) {
    const searchQuery = event.target.value;
    if (searchQuery) {
      // Filter events based on the search query
      this.searchResults = this.events.filter(
        event =>
          event.Titre.toLowerCase().includes(searchQuery.toLowerCase()) ||
          event.emplacementEvent.toLowerCase().includes(searchQuery.toLowerCase())
      );
    } else {
      // Reset search results if search query is empty
      this.searchResults = [];
    }
  }
}


