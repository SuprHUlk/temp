import { Component } from '@angular/core';
import { NavComponent } from '../nav/nav.component';
import { FooterComponent } from '../footer/footer.component';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { ContactService } from '../../services/contact-service/contact.service';
import { RecaptchaModule } from 'ng-recaptcha-2';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [
    NavComponent,
    FooterComponent,
    ReactiveFormsModule,
    RecaptchaModule,
  ],

  templateUrl: './contact.component.html',
  styleUrl: './contact.component.css',
})
export class ContactComponent {
  toggle: boolean = true;
  contactForm: FormGroup;
  disabled: boolean = true;

  constructor(private contactService: ContactService) {
    this.contactForm = new FormGroup({
      firstName: new FormControl('', [Validators.required]),
      lastName: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required, Validators.email]),
      phone: new FormControl('', [
        Validators.required,
        Validators.pattern(/^\d{10}$/),
      ]),
      message: new FormControl('', [Validators.required]),
    });
  }

  onSubmit() {
    console.log(123);

    if (this.contactForm.valid) {
      console.log(this.contactForm.value);
      const data = {
        email: this.contactForm.value.email,
        subject:
          this.contactForm.value.firstName +
          ' ' +
          this.contactForm.value.lastName +
          ' ' +
          this.contactForm.value.phone,
        message: this.contactForm.value.message,
      };

      this.contactService.sendEmail(data).subscribe((data) => {
        console.log(data);
      });
    }
  }

  resolved(captchaResponse: any) {
    if (
      captchaResponse === undefined ||
      captchaResponse === null ||
      captchaResponse === ''
    ) {
      this.disabled = true;
    } else {
      this.disabled = false;
    }
    console.log(this.disabled);
  }
}
