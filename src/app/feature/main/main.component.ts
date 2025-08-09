import {Component, OnInit} from '@angular/core';
import {HeaderService} from '../../shared/services/header.service';

@Component({
  selector: 'app-main',
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit {
  constructor(private headerService: HeaderService) {
  }
  ngOnInit() {
    this.headerService.whiteBg.set(false);
  }
}
