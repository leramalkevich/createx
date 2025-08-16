import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostsService {
  getBlogPosts() {
    return [
      {
        id: '011',
        form: 'Podcast',
        image: 'blog-post1.png',
        title: 'What is traffic arbitrage and does it really make money?',
        description: 'Pharetra, ullamcorper iaculis viverra parturient sed id sed. Convallis proin dignissim lacus, purus gravida...',
        link: '',
        addInfo: {
          sphere: 'Marketing',
          date: 'September 4, 2020',
          timeToConsume: '36 min'
        }
      },
      {
        id: '012',
        form: 'Video',
        image: 'blog-post2.png',
        title: 'What to do and who to talk to if you want to get feedback on the product',
        description: 'Neque a, senectus consectetur odio in aliquet nec eu. Ultricies ac nibh urna urna sagittis faucibus...',
        link: '',
        addInfo: {
          sphere: 'Management',
          date: 'August 25, 2020',
          timeToConsume: '45 min'
        }
      },
      {
        id: '013',
        form: 'Video',
        image: 'blog-post3.png',
        title: 'Should you choose a creative profession if you are attracted to creativity?',
        description: 'Curabitur nisl tincidunt eros venenatis vestibulum ac placerat. Tortor, viverra sed vulputate ultrices...',
        link: '',
        addInfo: {
          sphere: 'Design',
          date: 'August 8, 2020',
          timeToConsume: '40 min'
        }
      },
      {
        id: '014',
        form: 'Article',
        image: 'blog-post4.jpg',
        title: 'How to choose the first programming language for a beginner',
        description: 'Turpis sed at magna laoreet gravida consequat tortor placerat. Gravida vitae aliquet enim egestas dui...',
        link: '',
        addInfo: {
          sphere: 'Development',
          date: 'September 1, 2020'
        }
      },
      {
        id: '015',
        form: 'Article',
        image: 'blog-post5.jpg',
        title: 'HR statistics: job search,  interviews, hiring and recruiting',
        description: 'Massa, lectus nibh consectetur aliquet nunc risus aenean. Leo hac netus bibendum diam adipiscing aenean nisl. Molestie nullam ante mattis ac sit vitae pellentesque mi etiam. Morbi commodo tempor, massa vivamus. A molestie id semper fermentum pretium...',
        link: '',
        addInfo: {
          sphere: 'HR & Recruting',
          date: 'August 3, 2020'
        }
      },
      {
        id: '016',
        form: 'Podcast',
        image: 'blog-post6.png',
        title: 'What are color profiles and how they work in graphic design',
        description: 'Aliquam vulputate hendrerit quam sollicitudin urna enim viverra gravida. Consectetur urna arcu eleifend...',
        link: '',
        addInfo: {
          sphere: 'Design',
          date: 'July 28, 2020',
          timeToConsume: '36 min'
        }
      },
      {
        id: '017',
        form: 'Video',
        image: 'blog-post7.png',
        title: 'Startup: how to build a team that will live longer than a year',
        description: 'Nisi, massa ut sit faucibus et diam. Faucibus at malesuada at justo scelerisque in nisi, urna...',
        link: '',
        addInfo: {
          sphere: 'Management',
          date: 'July 15, 2020',
          timeToConsume: '45 min'
        }
      },
      {
        id: '018',
        form: 'Article',
        image: 'blog-post8.jpg',
        title: 'How to get customers to love your business from the start',
        description: 'Malesuada in augue mi feugiat morbi a aliquet enim. Elementum lacus, pellentesque etiam arcu tristique ac...',
        link: '',
        addInfo: {
          sphere: 'Marketing',
          date: 'July 9, 2020'
        }
      },
    ]
  }

  getRandomBlogPosts(number: number) {
    let offeredBlogPosts = this.getBlogPosts().sort(() => 0.5 - Math.random());
    return offeredBlogPosts.slice(0, number);
  }

  posts = signal(this.getBlogPosts());

  constructor() {
  }
}
