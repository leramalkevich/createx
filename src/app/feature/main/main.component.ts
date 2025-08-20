import {Component, OnDestroy, OnInit} from '@angular/core';
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
import {BlogPostCardComponent} from '../../shared/components/blog-post-card/blog-post-card.component';
import {PostsService} from '../../shared/services/posts.service';
import {PostType} from '../../../types/post.type';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {ReviewsComponent} from '../../shared/components/reviews/reviews.component';
import {CertificateComponent} from '../../shared/components/certificate/certificate.component';
import {CertificateService} from '../../shared/services/certificate.service';
import {EventService} from '../../shared/services/event.service';
import {EventType} from '../../../types/event.type';
import {EventCardComponent} from '../../shared/components/event-card/event-card.component';

@Component({
  selector: 'app-main',
  imports: [RouterLink, CommonModule, CourseCardComponent, CarouselModule, TeamMemberCardComponent, BlogPostCardComponent,
    SubscribeComponent, ReviewsComponent, CertificateComponent, EventCardComponent],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss',
})
export class MainComponent implements OnInit, OnDestroy {
  courses: CourseType[] = [];
  team: TeamMemberType[] = [];
  blogPosts: PostType[] = [];
  events: EventType[] = [];
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
  tutorsShown: boolean = true;
  feedbackShown: boolean = false;
  libraryShown: boolean = false;
  communityShown: boolean = false;

  constructor(private headerService: HeaderService, private coursesService: CoursesService, private teamService: TeamService,
              private postsService: PostsService, private certificateService: CertificateService, private eventService: EventService) {
  }

  ngOnInit() {
    this.headerService.whiteBg.set(false);
    this.courses = this.coursesService.getRandomCourses(6);
    this.team = this.teamService.team();
    this.blogPosts = this.postsService.getRandomBlogPosts(3);
    this.certificateService.twoColoredBg.set(true);
    this.events = this.eventService.getRandomBlogPosts(3);
  }
  ngOnDestroy() {
    this.headerService.whiteBg.set(true);
  }

  showDescription(clickedBtn: HTMLElement) {
    if (parseInt(clickedBtn.id) === 1) {
      this.tutorsShown = true;
      this.feedbackShown = false;
      this.libraryShown = false;
      this.communityShown = false;
    } else if (parseInt(clickedBtn.id) === 2) {
      this.feedbackShown = true;
      this.tutorsShown = false;
      this.libraryShown = false;
      this.communityShown = false;
    } else if (parseInt(clickedBtn.id) === 3) {
      this.libraryShown = true;
      this.tutorsShown = false;
      this.feedbackShown = false;
      this.communityShown = false;
    } else if (parseInt(clickedBtn.id) === 4) {
      this.communityShown = true;
      this.tutorsShown = false;
      this.feedbackShown = false;
      this.libraryShown = false;
    }
  }
}
