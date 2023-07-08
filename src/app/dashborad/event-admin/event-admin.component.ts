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
  updatedTitre: string = '';
updatedDescription: string = '';
editedEvent: Event | null = null;

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
  editEvent(event: Event) {
    const updatedTitre = prompt('Enter the updated title:', event.Titre);
    const updatedDescription = prompt('Enter the updated description:', event.description);

    if (updatedTitre !== null && updatedDescription !== null) {
      event.updatedTitre = updatedTitre.trim();
      event.updatedDescription = updatedDescription.trim();
      this.eventService.updateEventById(event._id, event).subscribe(
        (data) => {
          // Update the event in the events array with the updated values
          event.Titre = event.updatedTitre!;
          event.description = event.updatedDescription!;
          // Update other fields if needed
          event.isEdit = false; // Switch back to non-edit mode
        },
        (error) => {
          console.error('Error:', error);
        }
      );
    }; console.log(event.updatedTitre, event.updatedDescription);
  }
  updateEvent(event: Event) {
    if (event.updatedTitre !== undefined && event.updatedDescription !== undefined) {
      const updatedEvent: Partial<Event> = {
        Titre: event.updatedTitre,
        description: event.updatedDescription
        // Include other updated fields as needed
      };


    }
  }



}
