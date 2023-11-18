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
          console.error('Fehler beim Senden des Formulars', error);
          // Behandlung von Fehlern, z.B. Anzeigen einer Fehlermeldung
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
