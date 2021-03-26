import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Contact } from './models/contact';

@Injectable({
  providedIn: 'root'
})
export class AppService {
  private url = 'http://652c89d5c317.ngrok.io/contacts';

  constructor(
    private httpClient: HttpClient
  ) { }

  getContacts() {
    return this.httpClient.get(this.url);
  }

  createContact(contact: Contact) {
    return this.httpClient.post(this.url, contact);
  }

  editContact(contact: Contact) {
    return this.httpClient.put(`${this.url}/${contact.id}`, contact);
  }

  deleteContact(contactId: Number) {
    return this.httpClient.delete(`${this.url}/${contactId}`);
  }
}
