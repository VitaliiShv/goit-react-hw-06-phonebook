import { ADD_CONTACT, DELETE_CONTACT } from './types';

const initialState = {
  contacts: [],
  filter: '',
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CONTACT:
      const newContacts = [...state.contacts, action.payload];
      return { ...state, contacts: newContacts };

    case DELETE_CONTACT:
      const updatedContacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      return { ...state, contacts: updatedContacts };

    default:
      return state;
  }
};

export default reducer;
