import {Injectable, signal} from '@angular/core';
import {single} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewsService {
  getReviews(){
    return [
      {
        id:'1',
        userName:'Eleanor Pena',
        image:'user-image1.png',
        position:'A listener',
        course:'Brand Management & PR Communications',
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'
      },
      {
        id:'2',
        userName:'Luna Maxwell',
        image:'user-image2.png',
        position:'A listener',
        course:'Graphic Design Basic',
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'
      },
      {
        id:'3',
        userName:'John Green',
        image:'user-image3.png',
        position:'A listener',
        course:'Business Development Management',
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'
      },
      {
        id:'4',
        userName:'Amber Dutch',
        image:'user-image4.png',
        position:'A listener',
        course:'Human Resources – Selection and Recruitment',
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'
      },
      {
        id:'5',
        userName:'Alex Waren',
        image:'user-image5.png',
        position:'A listener',
        course:'Highload Software Architecture',
        comment:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Justo, amet lectus quam viverra mus lobortis fermentum amet, eu. Pulvinar eu sed purus facilisi. Vitae id turpis tempus ornare turpis quis non. Congue tortor in euismod vulputate etiam eros. Pulvinar neque pharetra arcu diam maecenas diam integer in.'
      },
    ]
  }
  reviews = signal(this.getReviews());
  constructor() { }
}
