import {Component, effect, ElementRef, OnInit, ViewChild} from '@angular/core';
import {PopUpService} from '../../services/pop-up.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'pop-up',
  imports: [CommonModule],
  templateUrl: './pop-up.component.html',
  styleUrl: './pop-up.component.scss',
  standalone: true
})
export class PopUpComponent implements OnInit {
  isShown:boolean = false;
  @ViewChild('innerPopupText')innerPopupText:ElementRef|undefined;
  constructor(private popUpService:PopUpService) {
    effect(()=>{
      this.isShown = this.popUpService.showPopUp();
    })
  }
  ngOnInit() {
    // this.isShown = this.popUpService.showPopUp();
    console.log(this.isShown);
  }

  hidePopUp() {
    this.popUpService.showPopUp.set(false);
    this.isShown = false;
  }
}
