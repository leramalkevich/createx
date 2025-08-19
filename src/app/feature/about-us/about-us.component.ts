import {Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderService} from '../../shared/services/header.service';
import {TeamMemberCardComponent} from '../../shared/components/team-member-card/team-member-card.component';
import {TeamService} from '../../shared/services/team.service';
import {TeamMemberType} from '../../../types/team-member.type';
import {CommonModule} from '@angular/common';
import {ReviewsComponent} from '../../shared/components/reviews/reviews.component';
import {BlogPostCardComponent} from '../../shared/components/blog-post-card/blog-post-card.component';
import {PostsService} from '../../shared/services/posts.service';
import {PostType} from '../../../types/post.type';
import {SubscribeComponent} from '../../shared/components/subscribe/subscribe.component';
import {CategoryType} from '../../../types/category.type';
import {CategoryService} from '../../shared/services/category.service';
import {CategoryCardComponent} from '../../shared/components/category-card/category-card.component';

@Component({
  selector: 'app-about-us',
  imports: [RouterLink, CommonModule, TeamMemberCardComponent, ReviewsComponent, BlogPostCardComponent, SubscribeComponent, CategoryCardComponent],
  templateUrl: './about-us.component.html',
  styleUrl: './about-us.component.scss'
})
export class AboutUsComponent implements OnInit {
  tutors: TeamMemberType[] = [];
  latestPost: PostType[] = [];
  courseCategories:CategoryType[]=[];

  constructor(private headerService: HeaderService, private teamService: TeamService, private postsService: PostsService,
              private categoryService:CategoryService) {
  }

  ngOnInit() {
    this.headerService.whiteBg.set(true);
    this.tutors = this.teamService.team();
    this.latestPost = this.postsService.getRandomBlogPosts(3);
    this.courseCategories = this.categoryService.categories();
  }
}
