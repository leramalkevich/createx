import {AfterViewChecked, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {EventType} from '../../../../types/event.type';
import {CommonModule} from '@angular/common';
import {EventService} from '../../services/event.service';

@Component({
  selector: 'event-card',
  imports: [CommonModule],
  templateUrl: './event-card.component.html',
  styleUrl: './event-card.component.scss'
})
export class EventCardComponent implements AfterViewChecked{
  @Input('event') event: EventType = {
    id: '',
    title: '',
    type: '',
    time: '',
    date: {
      day: '',
      month: '',
      year: ''
    }
  };
  @ViewChild('eventCard')eventCard!:ElementRef;
  gridCard: boolean = false;
  constructor(private eventService:EventService) {
  }

  ngAfterViewChecked() {
    this.gridCard = this.eventService.gridCardView();
    if (this.gridCard) {
      this.eventCard.nativeElement.classList.add('grid-view');
    } else {
      this.eventCard.nativeElement.classList.remove('grid-view');
    }
  }
}
