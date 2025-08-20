import {Component, inject, OnInit} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NumberOnlyDirective} from '../../shared/directives/number-only.directive';
import {PopUpService} from '../../shared/services/pop-up.service';
import {HeaderService} from '../../shared/services/header.service';

@Component({
  selector: 'contacts',
  imports: [CommonModule, ReactiveFormsModule, NumberOnlyDirective],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent implements OnInit {
  private fb = inject(FormBuilder);
  contactForm = this.fb.group({
    firstName:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*\\s*(?:[\\s\'-][A-Za-zA-Z]*)*\\s*$')]],
    lastName:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*\\s*(?:[\\s\'-][A-Za-zA-Z]*)*\\s*$')]],
    email:['', [Validators.email, Validators.required]],
    phone:[''],
    message:['', Validators.required],
    agreeToReceiveCommunications: [false, []]
  });
  constructor(private popUpService:PopUpService, private headerService:HeaderService) {
  }
  ngOnInit() {
    this.headerService.whiteBg.set(true);
  }

  sendMessage():void{
    if (this.contactForm.value.firstName && this.contactForm.value.lastName && this.contactForm.value.email &&
    this.contactForm.value.message) {
      this.popUpService.showPopUp.set(true);
      this.contactForm.reset();
      this.contactForm.markAsUntouched();
    }
  }
}
