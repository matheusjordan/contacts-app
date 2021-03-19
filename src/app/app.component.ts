import { Component } from '@angular/core';

class Contact {
  constructor(
    public avatar: string,
    public name: string,
    public number: string
  ) {}
}

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  contacts: Contact[] = []

  newContact = new Contact(null, null, null);

  enableEdit = false;

  constructor() {
    this.setContacts();
  }

  saveContact() {
    this.newContact.avatar = this.generateAvatar();
    this.contacts.push(this.newContact);
    this.clear();
  }

  deleteContact(contact: Contact) {
    this.contacts = this.contacts.filter(tempContact => tempContact.name !== contact.name)
  } 

  clear() {
    this.newContact = new Contact(null, null, null)
  }

  changeEditStatus() {
    this.enableEdit = !this.enableEdit;
  }

  private generateAvatar(): string {
    return `https://www.gravatar.com/avatar/${Math.ceil(Math.random() * 1024)}?s=32&d=identicon&r=PG`;
  }

  private setContacts() {
    this.contacts = [
      { avatar: this.generateAvatar(), name: 'jose', number: '123'},
      { avatar: this.generateAvatar(), name: 'joao', number: '456'},
      { avatar: this.generateAvatar(), name: 'maria', number: '789'},
    ]
  }
}
