import {Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {RouterLink} from '@angular/router';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {PopUpService} from '../../services/pop-up.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-footer',
  imports: [RouterLink, ReactiveFormsModule, CommonModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  private fb = inject(FormBuilder);
  subscribeForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]]
  });
  @ViewChild('subscribe')subscribeContainer:ElementRef|undefined;
  @HostListener('document:click', ['$event'])
  clickout(event: any) {
    if (!this.subscribeContainer?.nativeElement.contains(event.target)) {
      this.subscribeForm.reset();
      this.subscribeForm.markAsUntouched();
    }
  }
  constructor(private popUpService: PopUpService) {
  }
  scrollToTop(): void {
    window.scrollTo({top: 0, behavior: 'smooth'});
  }
  showPopUp(){
    if (this.subscribeForm.value.email) {
      this.popUpService.showPopUp.set(true);
      this.subscribeForm.reset();
      this.subscribeForm.markAsUntouched();
    }
  }
  showPopUpOnLinkClick(){
    this.popUpService.showPopUp.set(true);
  }
}
