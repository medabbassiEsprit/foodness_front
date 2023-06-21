import { Component, OnInit } from '@angular/core';
import { EventService } from '../services/event.service';
import { Event } from '../Model/event';

@Component({
  selector: 'app-add-event',
  templateUrl: './add-event.component.html',
  styleUrls: ['./add-event.component.css']
})
export class AddEventComponent implements OnInit {
  event: Event = new Event();

  constructor(private eventService: EventService) { }

  ngOnInit(): void {
  }

  addEvent() {
    const images: File[] = []; // Assuming you have a way to get the images

    this.eventService.addEvent(this.event, images).subscribe(
      (data) => {
        console.log(data);
        // Handle successful event addition, e.g., navigate to a success page
      },
      (error) => {
        console.error(error);
        // Handle error, e.g., display an error message
      }
    );
  }
}
