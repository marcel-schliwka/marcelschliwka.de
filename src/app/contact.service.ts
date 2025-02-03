import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private apiUrl = 'https://api.marcelschliwka.de/contact';

  constructor(private http: HttpClient) {}

  sendContactForm(formData: any) {
    return this.http.post(this.apiUrl, formData);
  }
}
