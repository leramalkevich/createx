import {AfterViewInit, Component, ElementRef, Input, OnInit, ViewChild} from '@angular/core';
import {CourseType} from '../../../../types/course.type';
import {CommonModule} from '@angular/common';
import {CoursesService} from '../../services/courses.service';
import {TeamService} from '../../services/team.service';
import {TeamMemberType} from '../../../../types/team-member.type';
import {PopUpService} from '../../services/pop-up.service';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit, AfterViewInit {
  @Input() course: CourseType = {
    id: '',
    category: '',
    title: '',
    price: '',
    author: {
      image: '',
      name: ''
    }
  }
  categoryStyles = {
    backgroundColor: '',
    width: ''
  }
  verticalCard:boolean|undefined;
  @ViewChild('card')card!:ElementRef;
  author:TeamMemberType|undefined;
  image1:string='url("images/circles-carousels.png")';
  image2:string='';
  constructor(private coursesService:CoursesService, private teamService:TeamService, private popUpService:PopUpService) {
  }

  ngOnInit() {
    this.author = this.teamService.team().find(item=>item.name === this.course.author.name);
    if (this.author && this.author.image) {
      let path = `images/team/${this.author.image}`;
      if (path) {
        this.image2 = `url(${path})`;
      }
    } else {
      if (this.course.author.image) {
         let path = `images/authors/${this.course.author.image}`;
         if (path) {
           this.image2 = `url(${path})`;
         }
      }
    }
    if (this.course.category === 'Marketing') {
      this.categoryStyles.backgroundColor = '#03CEA4';
      this.categoryStyles.width = '80px';
    } else if (this.course.category === 'Management') {
      this.categoryStyles.backgroundColor = '#5A87FC';
      this.categoryStyles.width = '98px';
    } else if (this.course.category === 'HR & Recruting') {
      this.categoryStyles.backgroundColor = '#F89828';
      this.categoryStyles.width = '111px';
    } else if (this.course.category === 'Design') {
      this.categoryStyles.backgroundColor = '#F52F6E';
      this.categoryStyles.width = '59px';
    } else if (this.course.category === 'Development') {
      this.categoryStyles.backgroundColor = '#7772F1';
      this.categoryStyles.width = '113px';
    }
  }
  ngAfterViewInit() {
    this.verticalCard = this.coursesService.verticalCardView();
    if (this.verticalCard) {
      this.card.nativeElement.classList.add('vertical');
    } else {
      this.card.nativeElement.classList.remove('vertical');
    }
  }
  get backgroundImages():string{
    return `${this.image2}, ${this.image1}`;
  }
  showPopUp(){
    this.popUpService.showPopUp.set(true);
  }
}
