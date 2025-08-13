import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  getTeamMember(){
    return [
      {
        id: '01',
        name: 'Dianne Russell',
        image:'image1.png',
        jobTitle:'Founder and CEO',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
      {
        id: '02',
        name: 'Jerome Bell',
        image:'image2.png',
        jobTitle:'Founder and Program Director',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
      {
        id: '03',
        name: 'Kristin Watson',
        image:'image3.png',
        jobTitle:'Marketer, Curator of Marketing Course',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
      {
        id: '04',
        name: 'Marvin McKinney',
        image:'image4.png',
        jobTitle:'PM, Curator of Management Course',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
      {
        id: '05',
        name: 'Leslie Alexander Li',
        image:'image5.png',
        jobTitle:'Curator of HR & Recruting Course',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
      {
        id: '06',
        name: 'Kathryn Murphy',
        image:'image6.png',
        jobTitle:'Analyst and Marketing specialist',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
      {
        id: '07',
        name: 'Brooklyn Simmons',
        image:'image7.png',
        jobTitle:'Curator of Development Course',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
      {
        id: '08',
        name: 'Cody Fisher',
        image:'image8.png',
        jobTitle:'UX Designer, Curator of Design Course',
        socials: {
          facebook:'https://www.facebook.com',
          instagram:'https://www.instagram/com',
          linkedIn:'https://www.linkedin.com'
        }
      },
    ]
  }
  team = signal(this.getTeamMember());

  constructor() { }
}
