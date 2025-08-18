import {Component, Input} from '@angular/core';
import {EventType} from '../../../../types/event.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'event-card',
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent {
  @Input('event')event:EventType = {
    id: '',
    title: '',
    type: '',
    time: '',
    date: {
      day: '',
      month: '',
      year: ''
    }
  }
}
