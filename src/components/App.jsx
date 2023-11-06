//import React, { Component } from 'react';
import { useEffect, useState } from 'react';
import { Form } from './Form';
import { Contacts } from './Contacts';
import { Filter } from './Filter';
//import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import { styled } from 'styled-components';

export const App = () => {
  const [contacts, setContacts] = useState(
    () => JSON.parse(localStorage.getItem('contacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  //LOCAL STORAGE

  useEffect(() => {
    const savedContacts = localStorage.getItem('contacts');
    if (savedContacts) {
      setContacts(JSON.parse(savedContacts));
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const handleAddContact = newContact => {
    const existingContact = contacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );

    if (existingContact) {
      Notiflix.Notify.warning(`${newContact.name} is already in contacts.`);
      return;
    }

    setContacts(prevContacts => [...prevContacts, newContact]);
  };

  const handleDeleteContact = contactId => {
    setContacts(prevContacts =>
      prevContacts.filter(contact => contact.id !== contactId)
    );
  };

  const handleFilterChange = event => {
    setFilter(event.target.value);
  };

  const getFilteredContacts = () => {
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(filter.toLowerCase())
    );
  };

  const filteredContacts = getFilteredContacts();

  return (
    <StyledWrapper>
      <StyledDiv>
        <h1>Phonebook</h1>
        <Form onSubmit={handleAddContact} />
        <h2>Contacts list</h2>
        <Filter onChange={handleFilterChange} filter={filter} />
        <Contacts
          contacts={filteredContacts}
          removeContact={handleDeleteContact}
        />
      </StyledDiv>
    </StyledWrapper>
  );
};

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
