import {Component, Input} from '@angular/core';
import {TeamMemberType} from '../../../../types/team-member.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'team-member-card',
  imports: [CommonModule],
  templateUrl: './team-member-card.component.html',
  styleUrl: './team-member-card.component.scss'
})
export class TeamMemberCardComponent {
  @Input('person')person:TeamMemberType = {
    id: '',
    name: '',
    image:'',
    jobTitle:'',
    socials: {
      facebook:'',
      instagram:'',
      linkedIn:''
    }
  }

}
