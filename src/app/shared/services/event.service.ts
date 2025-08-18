import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  getEvents(){
    return [
      {
        id:'001',
        title:'Formation of the organizational structure of the company in the face of uncertainty.',
        type:'Online master-class',
        time:'11:00 – 14:00',
        date: {
          day:'05',
          month:'August',
          year:'2025'
        }
      },
      {
        id:'002',
        title:'Building a customer service department. Best Practices.',
        type:'Online lecture',
        time:'11:00 – 12:30',
        date: {
          day:'24',
          month:'July',
          year:'2025'
        }
      },
      {
        id:'003',
        title:'How to apply methods of speculative design in practice. Worldbuilding prototyping.',
        type:'Online workshop',
        time:'10:00 – 13:00',
        date: {
          day:'16',
          month:'July',
          year:'2025'
        }
      },
      {
        id:'004',
        title:'Find and evaluate: search and assessment tools for candidates.',
        type:'Online workshop',
        time:'9:00 – 14:00',
        date: {
          day:'10',
          month:'July ',
          year:'2025'
        }
      },
      {
        id:'005',
        title:'Connection to Microsoft Excel and Google Sheets, Data Visualization in Power BI.',
        type:'Online master-class',
        time:'15:00 – 19:00',
        date: {
          day:'27',
          month:'June',
          year:'2025'
        }
      },
      {
        id:'006',
        title:'Marketing or growth hacking: main differences and what business needs.',
        type:'Online lecture',
        time:'10:00 – 12:00',
        date: {
          day:'15',
          month:'June',
          year:'2025'
        }
      },
      {
        id:'007',
        title:'How to brief a client and present your design to approve it from the first show.',
        type:'Online lecture',
        time:'11:00 – 13:00',
        date: {
          day:'02',
          month:'June',
          year:'2025'
        }
      },
      {
        id:'008',
        title:'Who is a project manager and do I want to be PM?',
        type:'Online lecture',
        time:'11:00 – 12:00',
        date: {
          day:'29',
          month:'May',
          year:'2025'
        }
      },
      {
        id:'009',
        title:'The company\'s business page as an additional tool to support the announcement of vacancies.',
        type:'Online lecture',
        time:'10:00 – 12:00',
        date: {
          day:'18',
          month:'May',
          year:'2025'
        }
      },
    ]
  }
  getRandomBlogPosts(number: number) {
    let offeredBlogPosts = this.getEvents().sort(() => 0.5 - Math.random());
    return offeredBlogPosts.slice(0, number);
  }

  events = signal(this.getEvents());
  constructor() { }
}
