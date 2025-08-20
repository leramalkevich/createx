import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {PopUpComponent} from './shared/components/pop-up/pop-up.component';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, PopUpComponent, CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  standalone: true
})
export class AppComponent {
  title = 'createx';
}
