import { Component, OnInit } from '@angular/core';
import { EventService } from 'src/app/services/event.service';
import { Event } from '../../Model/event';

@Component({
  selector: 'app-event-admin',
  templateUrl: './event-admin.component.html',
  styleUrls: ['./event-admin.component.css']
})
export class EventAdminComponent implements OnInit {

  events: Event []=[];
  constructor(private eventService: EventService) {}

  ngOnInit() {

    this.eventService.getAllEvents().subscribe({
      next: (data)=> this.events = data,
      error: (err)=> {
        console.log(err)
      }, complete: ()=> console.info('done')
    }

    );

  }
}
