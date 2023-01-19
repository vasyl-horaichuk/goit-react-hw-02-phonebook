import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactFrom';
import { ContactList } from './ContactList/ContactList';
// import { Filter } from './Filter/Filter';
import { Title } from './Title/Title';
import { nanoid } from 'nanoid';

export class App extends Component {
  state = {
    contacts: [
      { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
      { id: 'id-2', name: 'Vasyl Horaichuk', number: '459-12-57' },
      { id: 'id-3', name: 'Rosie Simpson', number: '459-12-58' },
      { id: 'id-4', name: 'Rosie Simpson', number: '459-12-59' },
    ],
    filter: '',
  };

  addContact = ({ name, number }) => {
    console.log(name, number);
    this.setState(prevState => ({
      contacts: [
        ...prevState.contacts,
        {
          id: nanoid(),
          name,
          number,
        },
      ],
    }));
  };

  render() {
    return (
      <div>
        <Title title="Phonebook" />
        <ContactForm onSubmit={this.addContact} />
        <Title title="Contacts" />
        <ContactList items={this.state.contacts} />
        {/* <Filter /> */}
      </div>
    );
  }
}
