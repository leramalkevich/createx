import {Routes} from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path:'', loadComponent: ()=>import('./feature/main/main.component').then((m)=>m.MainComponent)},
      {path:'courses', loadComponent:()=>import('./feature/courses/courses.component').then((m)=>m.CoursesComponent)},
      {path:'about-us', loadComponent:()=>import('./feature/about-us/about-us.component').then((m)=>m.AboutUsComponent)},
      {path:'blog', loadComponent:()=>import('./feature/blog/blog.component').then((m)=>m.BlogComponent)},
      {path:'contact-us', loadComponent:()=>import('./feature/contacts/contacts.component').then((m)=>m.ContactsComponent)},
    ]
  }
];
