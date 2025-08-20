import {Component, ElementRef, inject, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {SignService} from '../../services/sign.service';
import {CommonModule} from '@angular/common';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {PopUpService} from '../../services/pop-up.service';

@Component({
  selector: 'sign-in',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './sign-in.component.html',
  styleUrl: './sign-in.component.scss'
})
export class SignInComponent implements OnInit, OnDestroy {
  private fb = inject(FormBuilder);
  signInIsShown:boolean = false;
  @ViewChild('password') password!: ElementRef;
  signInForm = this.fb.group({
    email:['', [Validators.required, Validators.email]],
    password:['', Validators.required],
    keepSigned:[false,[]]
  });
  constructor(private signService:SignService, private popUpService:PopUpService) {
  }
  ngOnInit() {
    this.signService.signInIsShown$.subscribe((isShown:boolean)=>{
      this.signInIsShown = isShown;
    });
  }
  ngOnDestroy() {
    this.signService.hideSignIn();
  }
  togglePassword() {
    if (this.password.nativeElement.getAttribute('type') == 'password') {
      this.password.nativeElement.setAttribute('type', 'text');
    } else {
      this.password.nativeElement.setAttribute('type', 'password');
    }
  }

  hideSignIn(){
    this.signService.hideSignIn();
    this.signInForm.reset();
    this.signInForm.markAsUntouched();
  }
  showPopUp(){
    if (this.signInForm.value.email && this.signInForm.value.password) {
      this.hideSignIn();
      this.popUpService.showPopUp.set(true);
    }
  }
  showSignUp(){
    this.signService.hideSignIn();
    this.signService.showSignUp();
  }
}
