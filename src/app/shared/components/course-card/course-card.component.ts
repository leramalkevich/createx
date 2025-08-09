import {Component, Input, OnInit} from '@angular/core';
import {CourseType} from '../../../../types/course.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'course-card',
  imports: [CommonModule],
  templateUrl: './course-card.component.html',
  styleUrl: './course-card.component.scss'
})
export class CourseCardComponent implements OnInit {
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

  ngOnInit() {
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
    }
  }
}
