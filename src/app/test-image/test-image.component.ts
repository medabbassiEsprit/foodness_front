import { Component, OnInit } from '@angular/core';
import { Event } from '../Model/event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-test-image',
  templateUrl: './test-image.component.html',
  styleUrls: ['./test-image.component.css']
})
export class TestImageComponent implements OnInit {
  events: Event[] = [];

  constructor(private eventService: EventService) {
    this.events.forEach(event => event.showTooltip = false);

  }

  ngOnInit(): void {
    this.eventService.getAllEvents().subscribe({
      next: (data) => {
        this.events = data;
        this.animateFirstEvent();
      },
      error: (err) => {
        console.log(err);
      },
      complete: () => {
        console.info('done');
      }
    });
  }

  animateFirstEvent(): void {
    const firstEvent = this.events[0];
    if (firstEvent) {
      // Apply the animation logic to the first event's image here
      const imageElement = document.querySelector('.animated-image');
      if (imageElement) {
        // Apply the animation styles or classes to the image element
        imageElement.classList.add('border-animation');
      }
    }
  }
}
