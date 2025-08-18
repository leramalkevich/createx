import {Component, OnInit} from '@angular/core';
import {EventCardComponent} from '../../shared/components/event-card/event-card.component';
import {EventService} from '../../shared/services/event.service';
import {EventType} from '../../../types/event.type';
import {CommonModule} from '@angular/common';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';

@Component({
  selector: 'events',
  imports: [EventCardComponent, CommonModule, SubscribeComponent],
  templateUrl: './events.component.html',
  styleUrl: './events.component.scss'
})
export class EventsComponent implements OnInit {
  events: EventType[] = [];

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.events();
  }
}
