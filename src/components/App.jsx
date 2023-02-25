import { useState, useEffect } from 'react';

import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';

import { useSelector, useDispatch } from 'react-redux';
import { addContact,deleteContact } from 'redux/actions';

const App = () => {
  const [filter, setFilter] = useState('');

  const contacts = useSelector(store => store.contacts);
  
  const dispatch = useDispatch();
  

  // useEffect(() => {
  //   localStorage.setItem('contacts', JSON.stringify(contacts));
  // }, [contacts]);

  const isDuplicate = name => {
    if (contacts.find(contact => contact.name === name)) {
      alert(`${name} is already in contact list`);
      return true;
    }
  };

  const onAddContact = ({ name, number }) => {
    if (isDuplicate(name)){
      return;
    };

    const action = addContact({ name, number });
    dispatch(action);
  };

  const onDeleteContact = contactId => {
    const action = deleteContact(contactId);
    dispatch(action);
  };

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
    
      <><h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact}  />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {contacts.length > 0 && (
        <ContactList
          onDeleteContact={onDeleteContact}
          contacts={contacts}
        />
      )}</>
    
  );
};

export default App;
