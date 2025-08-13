import {Component, Input} from '@angular/core';
import {PostType} from '../../../../types/post.type';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'blog-post-card',
  imports: [CommonModule],
  templateUrl: './blog-post-card.component.html',
  styleUrl: './blog-post-card.component.scss'
})
export class BlogPostCardComponent {
  @Input('post')post:PostType={
    id: '',
    form: '',
    image:'',
    title:'',
    description:'',
    link:'',
    addInfo: {
      sphere:'',
      date:'',
      timeToConsume: ''
    }
  }
}
