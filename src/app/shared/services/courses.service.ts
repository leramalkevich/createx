import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {
  getCourses(){
    return [
      {
        id: '1',
        category:'Marketing',
        title:'The Ultimate Google Ads Training Course',
        price: '$100',
        author: {
          image:'image1.png',
          name:'Jerome Bell'
        }

      },
      {
        id: '2',
        category:'Management',
        title:'Product Management Fundamentals',
        price: '$480',
        author: {
          image:'image2.png',
          name:'Marvin McKinney'
        }

      },
      {
        id: '3',
        category:'HR & Recruting',
        title:'HR  Management and Analytics',
        price: '$200',
        author: {
          image:'image3.png',
          name:'Leslie Alexander Li'
        }

      },
      {
        id: '4',
        category:'Marketing',
        title:'Brand Management & PR Communications',
        price: '$530',
        author: {
          image:'image4.png',
          name:'Kristin Watson'
        }

      },
      {
        id: '5',
        category:'Management',
        title:'Business Development Management',
        price: '$400',
        author: {
          image:'image5.png',
          name:'Dianne Russell'
        }

      },
      {
        id: '6',
        category:'Design',
        title:'Graphic Design Basic',
        price: '$500',
        author: {
          image:'image6.png',
          name:'Guy Hawkins'
        }

      },
      {
        id: '7',
        category:'Development',
        title:'Highload Software Architecture',
        price: '$600',
        author: {
          image:'image7.png',
          name:'Brooklyn Simmons'
        }

      },
      {
        id: '8',
        category:'HR & Recruting',
        title:'Human Resources – Selection and Recruitment',
        price: '$150',
        author: {
          image:'image8.png',
          name:'Kathryn Murphy'
        }

      },
      {
        id: '9',
        category:'Design',
        title:'User Experience. Human-centered Design',
        price: '$240',
        author: {
          image:'image9.png',
          name:'Cody Fisher'
        }

      }
    ]
  }

  getRandomCourses(number:number){
    let offeredCourses = this.getCourses().sort(()=> 0.5 - Math.random());
    return offeredCourses.slice(0, number);
  }

  courses = signal(this.getCourses());
  constructor() { }
}
