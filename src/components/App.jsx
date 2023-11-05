import React, { Component } from 'react';
import { nanoid } from 'nanoid';
import {ContactForm} from './ContactsForm/ContactsForm';
import {ContactList} from './ContactsList/ContactsList';


export class App extends Component {
  state = {
    contacts: [
      
    ],
    name: '',
  };

  addContact = contact => {
     
    this.setState(prevState => ({
      contacts: [{ id: nanoid(), ...contact }, ...prevState.contacts],
     
    }));
  };

  getContacts = () => {  
    const { contacts } = this.state;     
    return contacts.filter(contact =>
      contact.name
    );
  };

  render() {
    const visibleContacts = this.getContacts(); 
   
    return (
      <div>
        <h1>Phonebook</h1>
        <ContactForm onSubmit={this.addContact} />
        <h2>Contacts</h2>       
        <ContactList contacts={visibleContacts} />
      </div>
    );
  }
}