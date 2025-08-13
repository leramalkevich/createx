import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../shared/services/header.service';
import {RouterLink} from '@angular/router';
import {CourseType} from '../../../types/course.type';
import {CoursesService} from '../../shared/services/courses.service';
import {CourseCardComponent} from '../../shared/components/course-card/course-card.component';
import {CommonModule} from '@angular/common';
import {CarouselModule, OwlOptions} from 'ngx-owl-carousel-o';
import {TeamMemberCardComponent} from '../../shared/components/team-member-card/team-member-card.component';
import {TeamService} from '../../shared/services/team.service';
import {TeamMemberType} from '../../../types/team-member.type';
import {ReviewsService} from '../../shared/services/reviews.service';
import {ReviewsType} from '../../../types/reviews.type';
import {BlogPostCardComponent} from '../../shared/components/blog-post-card/blog-post-card.component';
import {PostsService} from '../../shared/services/posts.service';
import {PostType} from '../../../types/post.type';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';

@Component({
  selector: 'app-main',
  imports: [RouterLink, CommonModule, CourseCardComponent, CarouselModule, TeamMemberCardComponent, BlogPostCardComponent, SubscribeComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  courses: CourseType[] = [];
  team: TeamMemberType[] = [];
  reviews:ReviewsType[]=[];
  blogPosts:PostType[]=[];
  customOptions: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 24,
    dots: false,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
      400: {
        items: 2
      },
      740: {
        items: 3
      },
      940: {
        items: 4
      }
    },
    nav: false
  }
  customOptionsReviews: OwlOptions = {
    loop: true,
    mouseDrag: false,
    touchDrag: false,
    pullDrag: false,
    margin: 24,
    dots: true,
    navSpeed: 700,
    navText: ['', ''],
    responsive: {
      0: {
        items: 1
      },
    },
    nav: true
  }

  constructor(private headerService: HeaderService, private coursesService: CoursesService, private teamService: TeamService,
              private reviewsService: ReviewsService, private postsService: PostsService) {
  }

  ngOnInit() {
    this.headerService.whiteBg.set(false);
    this.courses = this.coursesService.getRandomCourses(6);
    this.team = this.teamService.team();
    this.reviews = this.reviewsService.reviews();
    this.blogPosts = this.postsService.posts();
  }
}
