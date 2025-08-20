import {Component, inject} from '@angular/core';
import {FormBuilder, ReactiveFormsModule, Validators} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {NumberOnlyDirective} from '../../shared/directives/number-only.directive';

@Component({
  selector: 'contacts',
  imports: [CommonModule, ReactiveFormsModule, NumberOnlyDirective],
  templateUrl: './contacts.component.html',
  styleUrl: './contacts.component.scss'
})
export class ContactsComponent {
  private fb = inject(FormBuilder);
  contactForm = this.fb.group({
    firstName:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*\\s*(?:[\\s\'-][A-Za-zA-Z]*)*\\s*$')]],
    lastName:['', [Validators.required, Validators.pattern('^[A-Z][a-zA-Z]*\\s*(?:[\\s\'-][A-Za-zA-Z]*)*\\s*$')]],
    email:['', [Validators.email, Validators.required]],
    phone:[''],
    message:['', Validators.required],
    agreeToReceiveCommunications: [false, []]
  });
  sendMessage():void{
    if (this.contactForm.value.firstName && this.contactForm.value.lastName && this.contactForm.value.email &&
    this.contactForm.value.message) {
      console.log(this.contactForm);

    }
  }
}
