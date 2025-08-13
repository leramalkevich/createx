import {Routes} from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path:'', loadComponent: ()=>import('./feature/main/main.component').then((m)=>m.MainComponent)},
      {path:'courses', loadComponent:()=>import('./feature/courses/courses.component').then((m)=>m.CoursesComponent)}
    ]
  }
];
