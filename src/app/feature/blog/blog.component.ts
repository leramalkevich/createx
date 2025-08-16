import { Component } from '@angular/core';
import {SubscribeToBlogComponent} from '../../shared/components/subscribe-to-blog/subscribe-to-blog.component';

@Component({
  selector: 'blog',
  imports: [SubscribeToBlogComponent],
  templateUrl: './blog.component.html',
  styleUrl: './blog.component.scss'
})
export class BlogComponent {

}
