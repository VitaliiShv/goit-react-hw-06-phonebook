import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { useSelector, useDispatch } from 'react-redux';
import { addContact, deleteContact, } from 'redux/contacts/contacts-slice';
import { setFilter } from 'redux/filter/filrter-slice'; 
import { getAllContacts, getFilteredContacts } from 'redux/contacts/contacts-selectors';
import { getFilter } from 'redux/filter/filter-selectors';

const App = () => {
  const contacts = useSelector(getAllContacts);
  const filteredContacts = useSelector(getFilteredContacts)
  const filter = useSelector(getFilter);
  
  const dispatch = useDispatch();
  
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

  const changeFilter = ({ target }) => {
    const action = setFilter(target.value);
    dispatch(action)
  };

  return (
    
      <><h1>Phonebook</h1>
      <ContactForm onSubmit={onAddContact}  />
      <h2>Contacts</h2>
      <Filter value={filter} onChange={changeFilter} />
      {filteredContacts.length > 0 && (
        <ContactList
          onDeleteContact={onDeleteContact}
          contacts={filteredContacts}
        />
      )}</>
    
  );
};

export default App;
