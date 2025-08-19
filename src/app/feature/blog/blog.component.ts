import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {SubscribeToBlogComponent} from '../../shared/components/subscribe-to-blog/subscribe-to-blog.component';
import {PostsService} from '../../shared/services/posts.service';
import {PostType} from '../../../types/post.type';
import {CommonModule} from '@angular/common';
import {BlogPostCardComponent} from '../../shared/components/blog-post-card/blog-post-card.component';
import {HeaderService} from '../../shared/services/header.service';

@Component({
  selector: 'blog',
  imports: [SubscribeToBlogComponent, CommonModule, BlogPostCardComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent implements OnInit {
  blogPosts:PostType[]=[];
  @ViewChild('allBtn')allBtn!:ElementRef;
  @ViewChild('articleBtn')articleBtn!:ElementRef;
  @ViewChild('videoBtn')videoBtn!:ElementRef;
  @ViewChild('podcastBtn')podcastBtn!:ElementRef;
  constructor(private postsService:PostsService, private headerService:HeaderService) {
  }
  ngOnInit() {
    this.headerService.whiteBg.set(true);
    this.blogPosts = this.postsService.posts();
    let bigPost = this.blogPosts.reduce((longest, current)=>{
      return current.description.length > longest.description.length ? current : longest;
    });
    if (bigPost) {
      bigPost.bigPost = true;
      let index = this.blogPosts.findIndex(item=>item.id === bigPost.id);
      this.blogPosts.splice(index, 1, bigPost);
    }
  }
  showOnly(element:HTMLElement, type?:string|undefined) {
    if (this.allBtn.nativeElement.classList.contains('active')) {
      this.allBtn.nativeElement.classList.remove('active');
    } else if (this.articleBtn.nativeElement.classList.contains('active')) {
      this.articleBtn.nativeElement.classList.remove('active');
    } else if (this.videoBtn.nativeElement.classList.contains('active')) {
      this.videoBtn.nativeElement.classList.remove('active');
    } else if (this.podcastBtn.nativeElement.classList.contains('active')) {
      this.podcastBtn.nativeElement.classList.remove('active');
    }
    element.classList.add('active');
    if (type) {
      if (type === 'article' || type === 'video' || type === 'podcast') {
        this.blogPosts = this.postsService.posts();
        let sortedFormBlog = this.blogPosts.filter(item=>item.form.toLowerCase() === type.toLowerCase());
        if (sortedFormBlog && sortedFormBlog.length > 0) {
          this.blogPosts = sortedFormBlog;
        }
      }
    } else {
      this.blogPosts = this.postsService.posts();
    }
  }
}
