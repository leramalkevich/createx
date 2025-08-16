import {Component, OnInit} from '@angular/core';
import {SubscribeToBlogComponent} from '../../shared/components/subscribe-to-blog/subscribe-to-blog.component';
import {PostsService} from '../../shared/services/posts.service';
import {PostType} from '../../../types/post.type';
import {CommonModule} from '@angular/common';
import {BlogPostCardComponent} from '../../shared/components/blog-post-card/blog-post-card.component';

@Component({
  selector: 'blog',
  imports: [SubscribeToBlogComponent, CommonModule, BlogPostCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  blogPosts:PostType[]=[];
  constructor(private postsService:PostsService) {
  }
  ngOnInit() {
    this.blogPosts = this.postsService.posts();
  }
}
