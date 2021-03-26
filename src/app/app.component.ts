import { Component } from '@angular/core';
import { AppService } from './app.service';
import { Contact } from './models/contact'


@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  contacts: Contact[] = []

  newContact = new Contact(null, null, null, null);

  enableEdit = false;

  constructor(
    private contactService: AppService
  ) {
    this.setContacts();
  }

  saveContact() {
    this.newContact.avatar = this.generateAvatar();
    this.contactService.createContact(this.newContact)
      .subscribe((response) =>{
        this.clear();
        this.setContacts();
        alert('Contato foi criado!');
      })

  }

  deleteContact(contact: Contact) {
    this.contactService.deleteContact(contact.id)
      .subscribe((response) => {
        this.setContacts();
        alert('Contato foi deletado!')
      })
  }

  editContact(contact: Contact) {
    this.contactService.editContact(contact)
      .subscribe((reponse) => {
        this.setContacts();
        this.enableEdit = false;
        alert('Contato foi editado!')
      })
  }

  clear() {
    this.newContact = new Contact(null, null, null, null)
  }

  changeEditStatus() {
    this.enableEdit = !this.enableEdit;
  }

  private generateAvatar(): string {
    return `https://www.gravatar.com/avatar/${Math.ceil(Math.random() * 1024)}?s=32&d=identicon&r=PG`;
  }

  private setContacts() {
    this.contactService.getContacts()
      .subscribe((response: Contact[]) => {
        this.contacts = response
      })
  }
}
