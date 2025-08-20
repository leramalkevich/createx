import {
  AfterContentChecked,
  Component,
  OnInit,
} from '@angular/core';
import {RouterLink} from '@angular/router';
import {HeaderService} from '../../services/header.service';
import {SignService} from '../../services/sign.service';
import {SignInComponent} from '../../components/sign-in/sign-in.component';
import {SignUpComponent} from '../../components/sign-up/sign-up.component';
import {PopUpService} from '../../services/pop-up.service';

@Component({
  selector: 'app-header',
  imports: [RouterLink, SignInComponent, SignUpComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit, AfterContentChecked {
  whiteBg: boolean | undefined;

  constructor(private headerService: HeaderService, private signService:SignService, private popUpService:PopUpService) {
  }

  ngOnInit() {
    this.whiteBg = this.headerService.whiteBg();
  }

  ngAfterContentChecked() {
    this.whiteBg = this.headerService.whiteBg();
  }
  showSignIn(){
    this.signService.showSignIn();
  }

  showPopUp(){
    this.popUpService.showPopUp.set(true);
  }
}
