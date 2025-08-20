import {Component, inject, OnDestroy, OnInit} from '@angular/core';
import {CommonModule} from '@angular/common';
import {SignService} from '../../services/sign.service';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {PopUpService} from '../../services/pop-up.service';
import {RxReactiveFormsModule, RxwebValidators} from '@rxweb/reactive-form-validators';

@Component({
  selector: 'sign-up',
  imports: [CommonModule, ReactiveFormsModule, RxReactiveFormsModule],
  templateUrl: './sign-up.component.html',
  styleUrl: './sign-up.component.scss'
})
export class SignUpComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  signUpIsShown: boolean = false;
  signUpForm = this.fb.group({
    fullName:['', [Validators.required, Validators.pattern(/^[A-Z][a-z]+\s*([A-Za-z]+\s*)*$/)]],
    email:['', [Validators.required, Validators.email]],
    password:['', [Validators.required, Validators.pattern(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)]],
    confirmedPassword:['', [Validators.required, RxwebValidators.compare({fieldName: 'password'})]],
    keepSigned:[false,[]]
  })
  constructor(private signService: SignService, private popUpService:PopUpService) {
  }

  ngOnInit() {
    this.signService.signUpIsShown$.subscribe((isShown: boolean) => {
      this.signUpIsShown = isShown;
    });
  }

  ngOnDestroy() {
    this.hideSignUp();
  }

  hideSignUp() {
    this.signService.hideSignUp();
    this.signUpForm.reset();
    this.signUpForm.markAsUntouched();
  }
  showPopUp(){
    this.hideSignUp();
    this.popUpService.showPopUp.set(true);
  }
  togglePassword(element:HTMLElement) {
    if (element.getAttribute('type') == 'password') {
      element.setAttribute('type', 'text');
    } else {
      element.setAttribute('type', 'password');
    }
  }

  showSignIn() {
    this.hideSignUp();
    this.signService.showSignIn();
  }
}
