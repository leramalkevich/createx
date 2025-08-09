import {AfterViewInit, Component, OnInit} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderService} from '../../services/header.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterViewInit {
  whiteBg:boolean | undefined;
  constructor(private headerService:HeaderService) {}
  ngOnInit() {
    this.whiteBg = this.headerService.whiteBg();
    console.log(this.whiteBg);
  }
  ngAfterViewInit() {}
}
