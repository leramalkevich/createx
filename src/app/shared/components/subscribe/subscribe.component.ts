import {Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {PopUpService} from '../../services/pop-up.service';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'subscribe',
  imports: [ReactiveFormsModule,CommonModule],
  templateUrl: './subscribe.component.html',
  styleUrl: './subscribe.component.scss'
})
export class SubscribeComponent {
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

  showPopUp() {
    if (this.subscribeForm.value.email) {
      this.popUpService.showPopUp.set(true);
      this.subscribeForm.reset();
      this.subscribeForm.markAsUntouched();
    }
  }
}
