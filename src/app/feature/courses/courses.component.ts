import {AfterViewInit, Component, OnInit} from '@angular/core';
import {ReviewsComponent} from '../../shared/components/reviews/reviews.component';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {CertificateComponent} from '../../shared/components/certificate/certificate.component';
import {CertificateService} from '../../shared/services/certificate.service';
import {CoursesService} from '../../shared/services/courses.service';
import {CourseType} from '../../../types/course.type';
import {CommonModule} from '@angular/common';
import {CourseCardComponent} from '../../shared/components/course-card/course-card.component';

@Component({
  selector: 'courses',
  imports: [ReviewsComponent, SubscribeComponent, CertificateComponent, CommonModule, CourseCardComponent],
  templateUrl: './courses.component.html',
  styleUrl: './courses.component.scss'
})
export class CoursesComponent implements OnInit, AfterViewInit {
  courses:CourseType[]=[];
  constructor(private certificateService:CertificateService, private coursesService: CoursesService) {
  }
  ngOnInit() {
    this.certificateService.twoColoredBg.set(false);
    this.courses = this.coursesService.courses();
    this.coursesService.verticalCardView.set(true);
  }
  ngAfterViewInit() {
  }
}
