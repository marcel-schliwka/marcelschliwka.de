import { Component } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ContactService } from '../contact.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss'],
})
export class ContactComponent {
  contactForm: FormGroup;
  submitSuccessfull: boolean = false;

  constructor(
    private formBuilder: FormBuilder,
    private contactService: ContactService
  ) {
    this.contactForm = this.formBuilder.group({
      name: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      message: ['', Validators.required],
      privacy: [false, Validators.requiredTrue],
    });
  }

  onSubmit() {
    if (this.contactForm.valid) {
      // Senden der Daten über den ContactService
      this.contactService.sendContactForm(this.contactForm.value).subscribe(
        (response) => {
          console.log('Erfolg!', response);
          this.submitSuccessfull = true;
        },
        (error) => {
          if (error.error.includes('privacy')) {
            console.error('Please accept the privacy policy');
          } else {
            console.error('General error', error);
          }
        }
      );
    }
  }

  checkFieldValidity(field: string): boolean {
    return this.contactForm.controls[field].valid;
  }
  isFormValid(): boolean {
    return this.contactForm.valid;
  }
}
