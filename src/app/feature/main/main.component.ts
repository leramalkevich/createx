import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../shared/services/header.service';
import {RouterLink} from '@angular/router';
import {CourseType} from '../../../types/course.type';
import {CoursesService} from '../../shared/services/courses.service';
import {CourseCardComponent} from '../../shared/components/course-card/course-card.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-main',
  imports: [RouterLink, CommonModule, CourseCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  courses:CourseType[]=[];
  constructor(private headerService: HeaderService, private coursesService:CoursesService) {
  }
  ngOnInit() {
    this.headerService.whiteBg.set(false);
    this.courses = this.coursesService.getRandomCourses(6);
  }
}
