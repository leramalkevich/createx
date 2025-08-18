import {Component, OnDestroy, OnInit} from '@angular/core';
import {SignService} from '../../services/sign.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'sign-in',
  imports: [CommonModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit, OnDestroy {
  signInIsShown:boolean = false;
  constructor(private signService:SignService) {
  }
  ngOnInit() {
    this.signService.signInIsShown$.subscribe((isShown:boolean)=>{
      this.signInIsShown = isShown;
    });
  }
  ngOnDestroy() {
    this.signService.hideSignIn();
  }

  hideSignIn(){
    this.signService.hideSignIn();
  }
  showSignUp(){
    this.signService.hideSignIn();
    this.signService.showSignUp();
  }
}
