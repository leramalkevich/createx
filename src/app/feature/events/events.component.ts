import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
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
export class EventsComponent implements OnInit, AfterViewInit {
  events: EventType[] = [];
  @ViewChild('listEventsView')listEventsView!:ElementRef;
  @ViewChild('gridEventsView')gridEventsView!:ElementRef;
  @ViewChild('eventsItems')eventsItems!:ElementRef;

  constructor(private eventService: EventService) {
  }

  ngOnInit() {
    this.events = this.eventService.events();
  }
  ngAfterViewInit() {

  }
  eventsViewList(){
    if (this.gridEventsView.nativeElement.classList.contains('active')) {
      this.gridEventsView.nativeElement.classList.remove('active');
      this.eventService.gridCardView.set(false);
    }
    if (!this.listEventsView.nativeElement.classList.contains('active')) {
      this.listEventsView.nativeElement.classList.add('active');
      if (!this.eventsItems.nativeElement.classList.contains('list')) {
        this.eventsItems.nativeElement.classList.add('list');
      }
    }
    if (this.eventsItems.nativeElement.classList.contains('grid')) {
      this.eventsItems.nativeElement.classList.remove('grid');
    }
  }
  eventsViewGrid(){
    if (this.listEventsView.nativeElement.classList.contains('active')) {
      this.listEventsView.nativeElement.classList.remove('active');
      this.eventsItems.nativeElement.classList.remove('list');
    }
    this.gridEventsView.nativeElement.classList.add('active');
    this.eventsItems.nativeElement.classList.add('grid');
    this.eventService.gridCardView.set(true);
  }
}
