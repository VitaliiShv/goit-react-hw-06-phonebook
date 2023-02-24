import { useState, useEffect } from 'react';
import { nanoid } from 'nanoid';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { Provider } from "react-redux";
import store from 'redux/store';
import {useSelector} from 'react-redux'

const App = () => {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(store => store.contacts);
  console.log(contacts);

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  // const isDuplicate = name => {
  //   if (contacts.find(contact => contact.name === name)) {
  //     alert(`${name} is already in contact list`);
  //     return;
  //   }
  // };

  // const addContact = ({ name, number }) => {
  //   isDuplicate(name);

  //   setContacts(prevContacts => {
  //     const contact = {
  //       id: nanoid(),
  //       name,
  //       number,
  //     };

  //     return [contact, ...prevContacts];
  //   });
  // };

  // const deleteContact = contactId => {
  //   setContacts(prevContacts =>
  //     prevContacts.filter(contact => contact.id !== contactId)
  //   );
  // };

  const changeFilter = ({ target }) => setFilter(target.value);

  const getVisibleContacts = () => {
    if (!filter) {
      return contacts;
    }
    const normalizedFilter = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalizedFilter)
    );
  };

  const visibleContacts = getVisibleContacts();

  return (
    <Provider store={store}>
      <><h1>Phonebook</h1>
      <ContactForm  />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactList
          contacts={visibleContacts}
        />
      )}</>
    </Provider>
  );
};

export default App;
