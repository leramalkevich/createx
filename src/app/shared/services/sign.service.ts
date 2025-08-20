import {Injectable} from '@angular/core';
import {Subject} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SignService {
  signInIsShown$ = new Subject<boolean>();
  signUpIsShown$ = new Subject<boolean>();
  showSignIn(){
    this.signInIsShown$.next(true);
  }
  hideSignIn(){
    this.signInIsShown$.next(false);
  }
  showSignUp(){
    this.signUpIsShown$.next(true);
  }
  hideSignUp(){
    this.signUpIsShown$.next(false);
  }

  constructor() { }
}
