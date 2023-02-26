export const getAllContacts = store => store.contacts;
export const getFilteredContacts = store => {
  if (!store.filter) {
    return store.contacts;
  }
  const normalizedFilter = store.filter.toLowerCase();
  return store.contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );
};
