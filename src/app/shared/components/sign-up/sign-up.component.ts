import {Component, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignService} from '../../services/sign.service';

@Component({
  selector: 'sign-up',
  imports: [CommonModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit, OnDestroy {
  signUpIsShown: boolean = false;

  constructor(private signService: SignService) {
  }

  ngOnInit() {
    this.signService.signUpIsShown$.subscribe((isShown: boolean) => {
      this.signUpIsShown = isShown;
    });
  }

  ngOnDestroy() {
    this.signService.hideSignUp();
  }

  hideSignUp() {
    this.signService.hideSignUp();
  }

  showSignIn() {
    this.signService.hideSignUp();
    this.signService.showSignIn();
  }
}
