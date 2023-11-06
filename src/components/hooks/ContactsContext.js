import { nanoid } from 'nanoid';
import Notiflix from 'notiflix';
import PropTypes from 'prop-types';

const { createContext, useContext, useState, useEffect } = require('react');
const ContactsContext = createContext();

const initialContacts = [
  //{ id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  //{ id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  //{ id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  //{ id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const useContacts = () => useContext(ContactsContext);

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(initialContacts);
  const [filter, setFilter] = useState('');

  //FORM
  function onSubmit(evt) {
    evt.preventDefault();

    const form = evt.currentTarget;
    const name = form.elements.name.value;
    const number = form.elements.number.value;

    const allContacts = contacts;
    if (
      allContacts.find(
        contact => contact.name.toLowerCase() === name.toLowerCase()
      )
    ) {
      return Notiflix.Notify.failure(`Contact ${name} already exist on list`);
    }

    const newContact = {
      name: name,
      number: number,
      id: nanoid(),
    };

    setContacts(prevContacts => [...prevContacts, newContact]);

    form.reset();
  }

  function handleDelete(ev) {
    const deletedContactId = ev.target.value;
    const updatedContacts = contacts.filter(
      contact => !(contact.id === deletedContactId)
    );

    setContacts([...updatedContacts]);
  }

  //function handleReset() {
  //setContacts(initialContacts);
  //localStorage.setItem('contacts', JSON.stringify(initialContacts));
  //}

  //FILTER
  function onChange(evt) {
    setFilter(evt.target.value);
  }
  const filteredContacts = contacts.filter(contact =>
    contact.name.toUpperCase().includes(filter.toUpperCase())
  );

  //LOCAL STORAGE
  useEffect(() => {
    const json = localStorage.getItem('contacts');

    if (JSON.parse(json) === null) {
      const json = JSON.stringify(initialContacts);
      localStorage.setItem('contacts', json);
    }
  }, []);

  useEffect(() => {
    const json = localStorage.getItem('contacts');
    const contacts = JSON.parse(json);

    if (JSON.parse(json) !== null) {
      setContacts(contacts);
    }
  }, []);

  useEffect(() => {
    if (contacts !== initialContacts) {
      const json = JSON.stringify(contacts);
      localStorage.setItem('contacts', json);
    }
  }, [contacts]);

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        filter,
        onSubmit,
        onChange,
        handleDelete,
        //handleReset,
        filteredContacts,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

ContactsContext.Provider.propTypes = {
  value: PropTypes.shape({
    contacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
    filter: PropTypes.string.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleFilter: PropTypes.func.isRequired,
    handleDelete: PropTypes.func.isRequired,
    handleReset: PropTypes.func.isRequired,
    filteredContacts: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.string.isRequired,
        name: PropTypes.string.isRequired,
        number: PropTypes.string.isRequired,
      })
    ),
  }),
};
