import { createStore } from 'redux';

const reducer = state => {
  return state;
};

const initialState = {
  contacts: [
    {
      id: 1,
      name: 'Harry Potter',
      number: '4565891',
    },
  ],
  filter: '',
};

const store = createStore(
  reducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;