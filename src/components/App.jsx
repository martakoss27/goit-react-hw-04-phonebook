import React, { Component } from 'react';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { styled } from 'styled-components';

export class App extends Component {
  state = {
    contacts: [],
    filter: '',
    name: '',
    number: '',
  };

  //nanoid = nanoid();

  //FORM
  handleSubmit = event => {
    event.preventDefault();
    const form = event.currentTarget;

    const {
      name: { value: name },
      number: { value: number },
    } = form.elements;

    const contactExists = this.state.contacts.find(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (contactExists) {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
    } else {
      const newContact = {
        id: nanoid(),
        name,
        number,
      };

      this.setState(prevState => ({
        contacts: [...prevState.contacts, newContact],
      }));
      Notiflix.Notify.success('New contact succesfully added!');
      form.reset();
    }
  };

  //CONTACTS
  handleClick = id => {
    const { contacts } = this.state;
    const contactToRemove = contacts.find(contact => contact.id === id);

    if (contactToRemove) {
      this.setState(prev => ({
        contacts: prev.contacts.filter(contact => contact.id !== id),
      }));

      Notiflix.Notify.success(`${contactToRemove.name} has been removed`);
    }
  };
  //FILTER
  handleFilterChange = e => {
    this.setState({ filter: e.currentTarget.value.toLowerCase() });
  };

  render() {
    const { contacts, filter } = this.state;
    const filterSearch = contacts.filter(contact =>
      contact.name.toLowerCase().includes(this.state.filter)
    );
    return (
      <StyledWrapper>
        <StyledDiv>
          <h1>Phonebook</h1>
          <Form onSubmit={this.handleSubmit} />
          <h2>Contacts list</h2>
          <Filter onChange={this.handleFilterChange} filter={filter} />
          <Contacts contacts={filterSearch} removeContact={this.handleClick} />
        </StyledDiv>
      </StyledWrapper>
    );
  }
}
const StyledWrapper = styled.div`
  height: 100vh;
  font-size: 30px;
  padding: 10% 0 10% 0;
`;
const StyledDiv = styled.div`
  width: 720px;
  border-radius: 5px;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  box-shadow: rgba(99, 99, 99, 0.2) 0px 2px 8px 0px;
`;
