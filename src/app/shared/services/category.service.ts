import {Injectable, signal} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {
  getCourseCategory(){
    return [
      {
        id:'1',
        category:'Marketing',
        image:'category-image1.png',
        description:'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
      },
      {
        id:'2',
        category:'Management',
        image:'category-image2.png',
        description:'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
      },
      {
        id:'3',
        category:'HR & Recruting',
        image:'category-image3.png',
        description:'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
      },
      {
        id:'4',
        category:'Design',
        image:'category-image4.png',
        description:'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
      },
      {
        id:'5',
        category:'Development',
        image:'category-image5.png',
        description:'Odio posuere netus quisque faucibus lectus arcu donec. Eget dictum eu viverra faucibus. Viverra scelerisque consequat.'
      },
    ]
  }
  categories = signal(this.getCourseCategory());
  constructor() { }
}
