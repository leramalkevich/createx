import {Routes} from '@angular/router';
import {LayoutComponent} from './shared/layout/layout.component';

export const routes: Routes = [
  {
    path: '', component: LayoutComponent,
    children: [
      {path:'', loadComponent: ()=>import('./feature/main/main.component').then((m)=>m.MainComponent)}
    ]
  }
];
