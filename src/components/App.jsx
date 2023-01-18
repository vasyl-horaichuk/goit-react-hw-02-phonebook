import React, { Component } from 'react';
import { ContactForm } from './ContactForm/ContactFrom';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
  };

  render() {
    return (
      <div>
        <ContactForm />
      </div>
    );
  }
}
