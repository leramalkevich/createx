import {Component, ElementRef, HostListener, inject, ViewChild} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {PopUpService} from '../../services/pop-up.service';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'subscribe-to-blog',
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './subscribe-to-blog.component.html',
  styleUrl: './subscribe-to-blog.component.scss'
})
export class SubscribeToBlogComponent {
  private fb = inject(FormBuilder);
  subscribeForm = this.fb.group({
    email: ['', [Validators.required, Validators.email]],
    agree: [false, Validators.required]
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
    if (this.subscribeForm.value.email && this.subscribeForm.value.agree) {
      this.popUpService.showPopUp.set(true);
      this.subscribeForm.reset();
      this.subscribeForm.markAsUntouched();
    }
  }
}
