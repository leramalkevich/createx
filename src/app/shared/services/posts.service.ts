import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getBlogPosts(){
    return[
      {
        id:'011',
        form: 'Podcast',
        image:'blog-post1.png',
        title:'What is traffic arbitrage and does it really make money?',
        description:'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
        link:'',
        addInfo: {
          sphere:'Marketing',
          date:'September 4, 2020',
          timeToConsume:'36 min'
        }
      },
      {
        id:'012',
        form: 'Video',
        image:'blog-post2.png',
        title:'What to do and who to talk to if you want to get feedback on the product',
        description:'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
        link:'',
        addInfo: {
          sphere:'Management',
          date:'August 25, 2020',
          timeToConsume:'45 min'
        }
      },
      {
        id:'013',
        form: 'Article',
        image:'blog-post3.png',
        title:'Should you choose a creative profession if you are attracted to creativity?',
        description:'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
        link:'',
        addInfo: {
          sphere:'Design',
          date:'August 8, 2020'
        }
      },
    ]
  }
  posts = signal(this.getBlogPosts());
  constructor() { }
}
