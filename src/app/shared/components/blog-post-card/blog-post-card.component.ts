import {AfterViewInit, Component, ElementRef, Input, ViewChild} from '@angular/core';
import {PostType} from '../../../../types/post.type';
import {CommonModule} from '@angular/common';
import {PopUpService} from '../../services/pop-up.service';

@Component({
  selector: 'blog-post-card',
  imports: [CommonModule],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.scss'
})
export class BlogPostCardComponent implements AfterViewInit {
  @Input('post') post: PostType = {
    id: '',
    form: '',
    image: '',
    title: '',
    description: '',
    link: '',
    addInfo: {
      sphere: '',
      date: '',
      timeToConsume: ''
    }
  }
  @ViewChild('blogPost') blogPost!: ElementRef;

  constructor(private popUpService: PopUpService) {
  }

  ngAfterViewInit() {
    if (this.post.bigPost) {
      this.blogPost.nativeElement.classList.add('big-card');
    }
  }

  showPopUp() {
    this.popUpService.showPopUp.set(true);
  }
}
